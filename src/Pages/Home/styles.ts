import styled from "styled-components";

export const HomeBox = styled.div`
	padding: 2rem 4rem 4rem 4rem;

	color: ${(props) => props.theme.white};
`
export const TopItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1{
		font-size: 2.5rem;
	}
`
export const Content = styled.div`
	margin-top: 1rem;
	border-radius: 8px;

	padding: 1rem;

	display: grid;
	grid-template-rows: (5, 1fr);
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 100px;
  grid-auto-columns: 50px;

	height: 49.578125rem;
	background: ${(props) => props.theme["gray-400"]};
`

export const FolderBox = styled.div`
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
export const FolderName = styled.div`
	padding: 0 0.5rem 0.75rem 0.5rem;
`
export const FolderImage = styled.div``

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
