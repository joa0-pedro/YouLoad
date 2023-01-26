import { useState } from "react";
import { AddButton, CancelButton, Modal, ModalButtons, ModalContent, ModalInput, ModalTitle, SaveButton } from "./styles";
import { Check, X } from "phosphor-react";
import {zodResolver} from "@hookform/resolvers/zod";
import * as zod from 'zod';
import { FormProvider, useForm } from "react-hook-form";

const NewPlaylistFormValidationSchema = zod.object({
	playlist: zod.string().min(1),
	music: zod.string().min(1),
})

type NewPlaylistFormData = zod.infer<typeof NewPlaylistFormValidationSchema>

export function  CreatePlayList(){
	const [showCreateModal, setShowCreateModal] = useState(false);
	const newPlaylistForm = useForm<NewPlaylistFormData>(
		{resolver: zodResolver(NewPlaylistFormValidationSchema),
			defaultValues: {
				playlist: "",
				music: "",
			}
		})

	const {watch} = newPlaylistForm

	// function handleCreateFolder(data: NewFolderFormData) {
	// 	createNewFolder(data);
	// 	setShowCreateModal(false);
	// 	reset()
	// }

	const music = watch('music')
	const playlist = watch('playlist')
	const isMusic = !playlist
  const isPlaylist = !music

	return (
		<div>
			<AddButton onClick={() => setShowCreateModal(true)}>Adicionar</AddButton>
			<>
			{showCreateModal ?
			<Modal>
				<ModalContent>
					<ModalTitle>
							<h1>
								Adicionar Musicas
							</h1>
							<h2>
								Insira o link da sua playlist ou musica
							</h2>
					</ModalTitle>
						<form>
								<FormProvider {...newPlaylistForm}>
								<ModalInput
									id="playlist"
									placeholder="Playlist"
									disabled={!isPlaylist}
								/>
								<ModalInput
									id="music"
									placeholder="Musicas"
									disabled={!isMusic}
								/>
	            </FormProvider>
								<ModalButtons>
									<CancelButton onClick={() => setShowCreateModal(false)}>
										<X size={47}/>
										Cancelar
									</CancelButton>
									<SaveButton type="submit">
										<Check size={47}/>
										Concluído
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
