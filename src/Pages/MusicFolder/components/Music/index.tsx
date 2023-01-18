import { MusicNote } from "phosphor-react";
import { FolderName } from "../../../Home/components/Folders/styles";
import { MusicBox, MusicImage } from "./styles";

export function MusicFile(){
	return (
		<MusicBox>
			<MusicImage>
				<MusicNote size={66} weight="fill"/>
			</MusicImage>
			<FolderName>
				Supercombo
			</FolderName>
		</MusicBox>
	)
}
