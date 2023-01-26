import { Folder } from "./reducer";

export enum ActionTypes {
  ADD_NEW_FOLDER = 'ADD_NEW_FOLDER',
  DELETE_FOLDER = 'DELETE_FOLDER',
}

export function addNewFolderAction(newFolder: Folder) {
  return {
    type: ActionTypes.ADD_NEW_FOLDER,
    payload: {
      newFolder,
    },
  }
}

export function deleteFolderAction(folder: Folder) {
	return {
		type: ActionTypes.DELETE_FOLDER,
	}
}

