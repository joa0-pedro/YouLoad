import { FolderSimple } from "phosphor-react";
import { CountElement, FolderBox, FolderImage, FolderName } from "./styles";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Folders() {


	return (
	<NavLink to="/folderName">
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
	</NavLink>
	)

}
