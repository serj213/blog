import { IDetailsArticle } from "../../../types/postDetail"

export enum EDetailsActions {
    GET = 'DETAILS: GET',
    SET = 'DETAILS: SET'
}

const getArticle = (id: string) => ({ type: EDetailsActions.GET })
const set = (post: IDetailsArticle) => ({ type: EDetailsActions.SET, payload: post })

export const postDetailsActions = {
    getArticle,
    set
}