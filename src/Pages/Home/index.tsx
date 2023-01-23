import { Content, CountElement, FolderBox, FolderImage, FolderName, HomeBox, TopItems } from "./styles";
import { CreateFolder } from "./components/CreateFolder";
import { NavLink } from "react-router-dom";
import { FolderSimple } from "phosphor-react";
import { useContext } from "react";
import { FoldersContext } from "../../context/FolderContext";

export function Home() {
	const { folders } = useContext(FoldersContext);

	return (
		<HomeBox>
			<TopItems>
				<h1>Pastas</h1>
				<CreateFolder />
			</TopItems>
			<Content>
				{folders.map(folder => {
					return (
					<NavLink to="/folderName" key={folder.id}>
						<FolderBox>
							<FolderImage>
								<CountElement>
									<p>0</p>
								</CountElement >
								<FolderSimple size={66} weight="fill"/>
							</FolderImage>
							<FolderName>
								{folder.name}
							</FolderName>
						</FolderBox>
					</NavLink>
					)
			})}
			</Content>
		</HomeBox>
	)
}
