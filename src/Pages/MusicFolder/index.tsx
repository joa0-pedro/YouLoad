import { MusicFile } from "./components/Music";
import { Content, HomeBox, TopItems } from "./styles";

export function MusicFolder(){
	return (
			<HomeBox>
				<TopItems>
					<h1>Musicas</h1>
				</TopItems>
				<Content>
				<MusicFile />
				</Content>
			</HomeBox>
	)
}
