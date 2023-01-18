import { ReactNode } from 'react'


interface Folder{
	name: string,
}

interface CreateFormData {
	name: string,
}

interface FolderContextProps {
	folders: Folder[]
}

interface FoldersContextProviderProps {
  children: ReactNode
}

export function FoldersContextProvider({ children}: FoldersContextProviderProps) {


	function createNewFolder(data: CreateFormData){

		const newFolder: Folder = {
      name: data.name,
    }

    setFolders((state) => [...folders, newFolder])
  }


	return (
    <FoldersContext.Provider value={createNewFolder}>
      {children}
    </FoldersContext.Provider>
  )
}
