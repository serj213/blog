import { Action } from "redux";
import { takeLatest, put, call } from "redux-saga/effects";
import { EDetailsActions, postDetailsActions } from "../actions";
import { postDetailApi } from "../../../api/modules/PostDetailApi";
import { appDetailsStatus } from "../../app/actions";
import { IDetailsArticle } from "../../../types/postDetail";


export function* postDetailsSaga() {
    yield takeLatest(EDetailsActions.GET, executeGetPostDetails)
}


function* executeGetPostDetails(id: Action<string>) {
    try {
        yield put(appDetailsStatus.pending())
        const response: IDetailsArticle = yield call(postDetailApi.getPostDetail, id)
        yield put(postDetailsActions.set(response))
        yield put(appDetailsStatus.success())
    } catch (error) {
        yield put(appDetailsStatus.error())
    }
}