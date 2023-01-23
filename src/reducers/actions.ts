import { Folder } from "./reducer";

export enum ActionTypes {
  ADD_NEW_FOLDER = 'ADD_NEW_FOLDER',
}

export function addNewFolderAction(newFolder: Folder) {
  return {
    type: ActionTypes.ADD_NEW_FOLDER,
    payload: {
      newFolder,
    },
  }
}


