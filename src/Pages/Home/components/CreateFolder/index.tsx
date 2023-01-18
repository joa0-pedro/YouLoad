import { useState } from "react";
import { AddButton, CancelButton, Modal, ModalButtons, ModalContent, ModalInput, ModalTitle, SaveButton } from "./styles";
import { Check, X } from "phosphor-react";
import { useForm } from 'react-hook-form'
import * as zod from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const newFolderFormValidationSchema = zod.object({
  name: zod.string().min(1, 'Informe a pasta'),
})

type NewFolderFormData = zod.infer<typeof newFolderFormValidationSchema>


interface Folder {
	name: string;
}

export function  CreateFolder(){
	const [folders, setFolders] = useState<Folder[]>([])
	const [newFolder, setNewFolder] = useState("");
	const [showCreateModal, setShowCreateModal] = useState(false);

	const {reset, register, handleSubmit  } = useForm<NewFolderFormData>({
    resolver: zodResolver(newFolderFormValidationSchema),
    defaultValues: {
      name: '',
    },
  })

	function handleCreateNewFolder(data: NewFolderFormData) {
    createNewFolder(data)
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
						<h3>Nome da Pasta</h3>
					</ModalTitle>
						<form onSubmit={handleSubmit(handleCreateNewFolder)}>
							<ModalInput {...register('name')}/>
						</form>
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
				</ModalContent>
      </Modal>
			: null}
			</>
		</div>
	)
}
