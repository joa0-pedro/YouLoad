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
