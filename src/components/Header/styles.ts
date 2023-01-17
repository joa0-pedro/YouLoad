import styled from "styled-components";

export const Box = styled.div`
	font-family: 'Roboto', sans-serif;
	font-weight: 400;
	font-size: 1.25rem;

	background: ${(props) => props.theme.black};
	color: ${(props) => props.theme["gray-100"]};

  position: sticky;
  top: 0;
`

export const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;

	padding: 1rem 4rem;
`

export const HeadButtons = styled.div`
	display: flex;
	gap: 2rem;
`

export const FolderContent = styled.div`
	display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;

  svg {
		margin-right: 0.75rem;
  }

  :hover {
		border-bottom: 2px solid ${props => props.theme.red};
		cursor: pointer;
  }
`

export const DownloadContent = styled(FolderContent)`
`

export const Logo = styled.div`
	display: flex;
	align-items: center;

	:hover{
		cursor: pointer;
	}
`

