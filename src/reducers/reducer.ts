
import { ActionTypes } from "./actions"

export interface Folder {
  id: string
  name: string
}

interface FoldersState {
  folders: Folder[]
}

export function FoldersReducer(state: FoldersState, action: any) {
	switch (action.type) {
		case ActionTypes.ADD_NEW_FOLDER:
			return {
				...state,
				folders: [...state.folders, action.payload.newFolder],
			}
		default:
			return state
	}
}
