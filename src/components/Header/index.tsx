import { Box, DownloadContent, FolderContent, HeadButtons, HeaderContent, Logo } from "./styles";
import Icon from "../../assets/Icon.svg"
import { DownloadSimple, FolderSimple } from "phosphor-react";


export function Header(){
	return (
	<Box>
		<HeaderContent>
			<Logo>
			<img src={Icon}/>
			</Logo>
			<HeadButtons>
				<FolderContent>
					<FolderSimple size={24} weight="fill"/>
					<p>Pastas</p>
				</FolderContent>
				<DownloadContent>
					<DownloadSimple size={24}/>
					<p>Downloads</p>
				</DownloadContent>
			</HeadButtons>
		</HeaderContent>
	</Box>
	)
}
