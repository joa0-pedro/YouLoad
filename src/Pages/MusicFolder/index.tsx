import { AddButton } from "../Home/components/CreateFolder/styles";
import { CreatePlayList } from "./components/CreatePlaylists";
import { DeleteFolder } from "./components/DeleteFolder";
import { MusicFile } from "./components/Music";
import { Content, HomeBox, TopButtons, TopItems } from "./styles";

export function MusicFolder() {
	return (
			<HomeBox>
				<TopItems>
					<h1>Musicas</h1>
					<TopButtons>
					<CreatePlayList />
					<DeleteFolder />
					</TopButtons>
				</TopItems>
				<Content>
				<MusicFile />
				</Content>
			</HomeBox>
	)
}
