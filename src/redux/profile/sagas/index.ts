import { AxiosError } from 'axios';
import Cookies from 'js-cookie';
import { Action } from 'redux-actions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { IApiError } from '../../../api/apiError';
import { profileApi } from '../../../api/modules/ProfileApi';
import { config } from '../../../config';
import UserFromRegister from '../../../dto/UserFromRegisterDTO';
import notifications from '../../../tools/notifications';
import { IAuthRes } from '../../../types/auth';
import { IUserData, IUserDelete, IUserEditData } from '../../../types/profile';
import { profileStatus } from '../../app/actions';
import { EUserActions, userActions } from '../actions';

export function* profileSagas() {
  yield takeLatest(EUserActions.GET_ME, executeGetMe);
  yield takeLatest(EUserActions.LOGOUT, executeLogout);
  yield takeLatest(EUserActions.EDIT_PROFILE, executeEditProfile);
  yield takeLatest(EUserActions.DELETE_PROFILE, executeDeleteProfile);
}

function* executeGetMe() {
  try {
    yield put(profileStatus.pending());
    const response: IAuthRes = yield call(profileApi.getMe);
    const user: IUserData = yield new UserFromRegister(response).toJSON();
    yield put(userActions.setProfile(user));
    yield put(profileStatus.success());
  } catch (e) {
    console.log('Ошибка profile saga ', e);
    const error = e as AxiosError;
    const errorMessage = error.response?.data as IApiError;
    yield put(profileStatus.error());
  }
}

function* executeLogout() {
  try {
    yield put(profileStatus.pending());
    yield put(userActions.resetProfile());
    Cookies.remove(config.userToken);
    yield put(profileStatus.success());
  } catch (error) {
    console.log('profile logout error ', error);
    yield put(profileStatus.error());
    notifications('Произошла ошибка').error();
  }
}

function* executeEditProfile(data: Action<IUserEditData>) {
  try {
    yield put(profileStatus.pending());
    const response: Omit<IAuthRes, 'token'> = yield call(profileApi.edit, data.payload);
    const user: IUserData = yield new UserFromRegister(response).toJSON();

    yield put(userActions.setEditProfile(user));
    yield put(profileStatus.success());
    notifications('Ваши данные успешно изменены').success();
  } catch (error) {
    console.log('profile edit error ', error);
    yield put(profileStatus.error());
    notifications('Произошла ошибка').error();
  }
}

function* executeDeleteProfile(data: Action<IUserDelete>) {
  try {
    yield put(profileStatus.pending());
    yield call(profileApi.deleteProfile, data.payload);
    Cookies.remove(config.userToken);
    yield put(userActions.resetProfile());
    yield put(profileStatus.success());
    notifications('Пользователь был успешно удален').success();
  } catch (error) {
    console.log('profile delete error ', error);
    yield put(profileStatus.error());
    notifications('Произошла ошибка').error();
  }
}
