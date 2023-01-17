import { MusicFolders } from "./components/MusicFolders";
import { Content, HomeBox, TopItems } from "./styles";
import { CreateFolder } from "./components/CreateFolder";

export function Home() {
	return (
		<HomeBox>
			<TopItems>
				<h1>Pastas</h1>
				<CreateFolder />
			</TopItems>
			<Content>
					<MusicFolders/>
					<MusicFolders/>
					<MusicFolders/>
			</Content>
		</HomeBox>
	)
}
