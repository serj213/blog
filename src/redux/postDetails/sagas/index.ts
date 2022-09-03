import { Action } from "redux";
import { takeLatest, put, call } from "redux-saga/effects";
import { EDetailsActions } from "../actions";

export function* postDetailsSaga() {
    yield takeLatest(EDetailsActions.GET, executeGetPostDetails)
}


function* executeGetPostDetails(id: Action<string>) {

}