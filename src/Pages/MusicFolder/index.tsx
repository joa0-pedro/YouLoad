import { AddButton } from "../Home/components/CreateFolder/styles";
import { MusicFile } from "./components/Music";
import { Content, HomeBox, TopItems } from "./styles";

export function MusicFolder() {
	return (
			<HomeBox>
				<TopItems>
					<h1>Musicas</h1>
					{/* <AddMusics /> */}
					{ <AddButton /*onClick={handleDeleteFolder}*/>Adicionar</AddButton>}
				</TopItems>
				<Content>
				<MusicFile />
				</Content>
			</HomeBox>
	)
}
