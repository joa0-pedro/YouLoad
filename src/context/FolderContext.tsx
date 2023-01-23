import { ReactNode, createContext, useReducer } from 'react'
import uuid from 'react-uuid';
import { addNewFolderAction } from '../reducers/actions';
import { Folder, FoldersReducer } from '../reducers/reducer';

interface CreateFolderData {
	name: string
}

interface FoldersContextType {
	folders: Folder[]
	createNewFolder : (data: CreateFolderData) => void
}

interface FoldersContextProviderProps {
	children: ReactNode
}

export const FoldersContext = createContext({} as FoldersContextType)

export function FoldersContextProvider({
	children,
}: FoldersContextProviderProps) {
	const [folderState, dispatch] = useReducer(FoldersReducer, {
		folders: [],
	})
	const { folders } = folderState


	function createNewFolder(data: CreateFolderData){
		const newFolder: Folder = {
			id: uuid(),
			name: data.name,
		}
		dispatch(addNewFolderAction(newFolder))
	}

	return (
    <FoldersContext.Provider
      value={{
      folders,
      createNewFolder,
      }}
    >
      {children}
    </FoldersContext.Provider>
  )
}
