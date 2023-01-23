import {  useContext, useState } from "react";
import { AddButton, CancelButton, Modal, ModalButtons, ModalContent, ModalInput, ModalTitle, SaveButton } from "./styles";
import { Check, X } from "phosphor-react";
import { FormProvider, useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { FoldersContext } from "../../../../context/FolderContext";
import * as zod from 'zod';

const NewFolderFormValidationSchema = zod.object({
	name: zod.string().min(1),
})

type NewFolderFormData = zod.infer<typeof NewFolderFormValidationSchema>

export function  CreateFolder(){
	const { createNewFolder } = useContext(FoldersContext);
	const [showCreateModal, setShowCreateModal] = useState(false);
	const newFolderForm = useForm<NewFolderFormData>(
		{resolver: zodResolver(NewFolderFormValidationSchema),
			defaultValues: {
				name: "",
			}
		})

	const {reset, register, handleSubmit} = newFolderForm

	function handleCreateFolder(data: NewFolderFormData) {
		createNewFolder(data);
		setShowCreateModal(false);
		reset()
	}

	return (
		<div>
			<AddButton onClick={() => setShowCreateModal(true)}>Adicionar</AddButton>
			<>
			{showCreateModal ?
			<Modal>
				<ModalContent>
					<ModalTitle>
							<h1>
								Criar Pastas
							</h1>
							<h2>
								É onde suas músicas vão estar agrupadas
							</h2>
							<h3>
								Nome da Pasta
							</h3>
					</ModalTitle>
						<form onSubmit={handleSubmit(handleCreateFolder)}>
							<FormProvider {...newFolderForm}>
								<ModalInput
									id="name"
									{...register('name')}
								/>
	            </FormProvider>
								<ModalButtons>
									<CancelButton onClick={() => setShowCreateModal(false)}>
										<X size={47}/>
										Cancelar
									</CancelButton>
									<SaveButton type="submit">
										<Check size={47}/>
										Salvar
									</SaveButton>
								</ModalButtons>
						</form>
				</ModalContent>
      </Modal>
			: null}
			</>
		</div>
	)
}
