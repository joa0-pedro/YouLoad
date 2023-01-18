import { Box, DownloadContent, FolderContent, HeadButtons, HeaderContent, Logo } from "./styles";
import Icon from "../../assets/Icon.svg"
import { DownloadSimple, FolderSimple } from "phosphor-react";
import { NavLink } from "react-router-dom";


export function Header(){
	return (
	<Box>
		<HeaderContent>
			<Logo>
			<NavLink to="/" title="Inicio">
			<img src={Icon}/>
			</NavLink>
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
