import styled from "styled-components"

export const MusicBox = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;

	color: ${(props) => props.theme["gray-200"]};

	padding: 1.114375rem;

	:hover{
		background-color: ${(props) => props.theme.darkHover};
		border-radius: 8px;
		cursor: pointer;
	}
`
export const MusicName = styled.div`
	padding: 0 0.5rem 0.75rem 0.5rem;
`
export const MusicImage = styled.div``

export const CountElement = styled.div`
	margin-left: 3rem;
	margin-top: 0.7rem;

	width: 25px;
	height: 25px;

	background-color: ${(props) => props.theme.red};
	color: ${(props) => props.theme.white};

	position: absolute;

	border-radius: 999px;

	p{
		display: flex;
		justify-content: center;
    margin-top: 3px;
	}
`
