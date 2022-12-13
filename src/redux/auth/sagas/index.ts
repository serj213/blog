import { takeLatest, put, call } from 'redux-saga/effects';
import { authActions, EAuthActions } from '../actions';
import { Action } from 'redux-actions';
import Cookies from 'js-cookie';
import { IAuthReq, IAuthReqLogin, IAuthRes } from '../../../types/auth';
import { authStatus } from '../../app/actions';
import { AuthApi } from '../../../api/modules/AuthApi';
import { IUserData } from '../../../types/profile';
import UserFromRegister from '../../../dto/UserFromRegisterDTO';
import { userActions } from '../../profile/actions';
import { config } from '../../../config';
import notifications from '../../../tools/notifications';
import { AxiosError } from 'axios';
import { IApiError } from '../../../api/apiError';

export function* authSaga() {
  yield takeLatest(EAuthActions.REGISTRATION, executeRegistration);
  yield takeLatest(EAuthActions.LOGIN, executeLogin);
}

function* executeRegistration(data: Action<IAuthReq>) {
  try {
    yield put(authStatus.pending());
    const response: IAuthRes = yield call(AuthApi.registration, data.payload);
    const user: IUserData = yield new UserFromRegister(response).toJSON();
    if (typeof window !== 'undefined') {
      Cookies.set(config.userToken, response.token);
    }
    yield put(userActions.setProfile(user));
    yield put(authStatus.success());
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data as IApiError;
    console.log('saga Ошибка при регистрации ', error);
    yield put(authStatus.error());
    yield notifications(errorMessage.message).error();
  }
}

function* executeLogin(data: Action<IAuthReqLogin>) {
  try {
    yield put(authStatus.pending());
    const response: IAuthRes = yield call(AuthApi.login, data.payload);
    Cookies.set(config.userToken, response.token);
    const user: IUserData = yield new UserFromRegister(response).toJSON();
    yield put(userActions.setProfile(user));
    yield data.payload.redirect();
    yield put(authStatus.success());
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data as IApiError;
    console.log('saga Ошибка при логировании ', error);
    yield put(authStatus.error());
    yield notifications(errorMessage.message).error();
  }
}
