import { Trash, X } from "phosphor-react";
import { AddButton, CancelButton, Modal, ModalButtons, ModalContent, ModalInput, ModalTitle, SaveButton } from "./styles";
import { useState } from "react";

export function DeleteFolder(){
	const [showCreateModal, setShowCreateModal] = useState(false);

	return (
		<div>
			<AddButton onClick={() => setShowCreateModal(true)}>Apagar</AddButton>
			<>
			{showCreateModal ?
			<Modal>
				<ModalContent>
					<ModalTitle>
							<h1>
								Tem certeza?
							</h1>
							<h2>
								Ao apagar essa pasta todas as musicas dentro dela serão perdidas
							</h2>
					</ModalTitle>
								<ModalButtons>
									<CancelButton onClick={() => setShowCreateModal(false)}>
										<X size={47}/>
										Cancelar
									</CancelButton>
									<SaveButton>
										<Trash size={42}/>
										Apagar
									</SaveButton>
								</ModalButtons>
				</ModalContent>
      </Modal>
			: null}
			</>
		</div>
	)
}
