import { MusicNote } from "phosphor-react";
import { MusicBox, MusicImage } from "./styles";
import { FolderName } from "../../../Home/styles";

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
