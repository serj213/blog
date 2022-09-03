import { Action } from "redux";
import { IDetailsArticle } from "../../types/postDetail";
import api from "..";
import { postDetailRequest } from "../../tools/asyncMockap";

const getPostDetail = async (id: Action<string>) => {
    // const response: IDetailsArticle = await api.post(`/post/${id}`);

    const response = await postDetailRequest(1000);

    return response
}

export const postDetailApi = {
    getPostDetail
}