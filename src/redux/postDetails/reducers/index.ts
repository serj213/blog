import { IDetailsState } from "../../../types/postDetail";
import { EDetailsActions } from "../actions";

const initialState: IDetailsState = {
    article: null
}

export const postDetailsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case EDetailsActions.SET:
            return {
                ...state,
                article: action.payload
            }
        default:
            return state
    }
}