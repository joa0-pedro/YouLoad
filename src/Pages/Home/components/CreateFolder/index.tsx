import { useState } from "react";
import { AddButton, CancelButton, Modal, ModalButtons, ModalContent, ModalInput, ModalTitle, SaveButton } from "./styles";
import { Check, X } from "phosphor-react";

export function  CreateFolder(){
	const [showCreateModal, setShowCreateModal] = useState(false);

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
					<ModalInput />
					<ModalButtons>
						<CancelButton onClick={() => setShowCreateModal(false)}>
							<X size={47}/>
						Cancelar
						</CancelButton>
						<SaveButton onClick={() => setShowCreateModal(false)}>
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
