import { FolderSimple } from "phosphor-react";
import { CountElement, FolderBox, FolderImage, FolderName } from "./styles";

export function MusicFolders() {
	return (
		<FolderBox>
			<FolderImage>
				<CountElement>
				<p>5</p>
				</CountElement >
				<FolderSimple size={66} weight="fill"/>
			</FolderImage>
			<FolderName>
				Supercombo
			</FolderName>
		</FolderBox>
	)

}
