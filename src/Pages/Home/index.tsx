import { Folders } from "./components/Folders";
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


			</Content>
		</HomeBox>
	)
}
