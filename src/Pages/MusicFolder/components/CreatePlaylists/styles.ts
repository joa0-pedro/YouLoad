import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width:100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`
export const ModalContent = styled.div`
	background: ${(props) => props.theme.background};
  padding: 1.375rem;
	border-radius: 8px;

  position:fixed;
  width: 704px;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
`
export const ModalTitle = styled.div`
	font-size: 2.5rem;

	h2 {
		margin: 0.5rem 0 2rem 0;
		font-size: 1.25rem;
	}

	h3 {
		font-size: 1.25rem;
	}

`
export const ModalInput = styled.input`
	background: ${(props) => props.theme["gray-400"]};
	color: ${(props) => props.theme.white};

	width: 661px;
	height: 51px;

	border: 0;
	border-radius: 16px;
	margin-top: 1rem;

	padding: 0.5rem;
`

export const ModalButtons = styled.div`
	display: flex;
	justify-content: space-between;
`

export const Button = styled.button`
	display: flex;
	align-items: center;

	background: none;
	border: none;
	color: ${(props) => props.theme.white};

	font-size: 1.25rem;

	margin: 1rem 0 0 0;

	svg {
		margin-right: 0.5rem;
	}
`

export const CancelButton = styled(Button)`
	:hover {
		transition: 0.4s;
		color: ${(props) => props.theme.red};
		cursor: pointer;
	}
`

export const SaveButton = styled(Button)`
	:hover {
		transition: 0.4s;
		color: ${(props) => props.theme.green};
		cursor: pointer;
	}
`

export const AddButton = styled.button`
	font-size: 20px;

	background: ${(props) => props.theme.red};
	color: ${(props) => props.theme.white};

	padding: 0.5rem 1.5rem;
	border-radius: 8px;
	border: 0;

	:hover{
		background: ${(props) => props.theme.redHover};
		transition: 0.4s;
		cursor: pointer;
	}

`
