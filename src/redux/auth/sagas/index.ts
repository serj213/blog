import { takeLatest, put, call } from 'redux-saga/effects';
import { EAuthActions } from '../actions';
import { Action } from 'redux-actions';
import Cookies from 'js-cookie';
import { IAuthReq, IAuthRes } from '../../../types/auth';
import { authStatus } from '../../app/actions';
import { AuthApi } from '../../../api/modules/AuthApi';
import { IUserData } from '../../../types/profile';
import UserFromRegister from '../../../dto/UserFromRegisterDTO';
import { userActions } from '../../profile/actions';
import { config } from '../../../config';

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
  } catch (error) {
    console.log('saga Ошибка при регистрации ', error);
    yield put(authStatus.error());
    alert('Ошибка при регистрации');
  }
}

function* executeLogin(data: Action<Omit<IAuthReq, 'name'>>) {
  try {
    yield put(authStatus.pending());
    const response: IAuthRes = yield call(AuthApi.login, data.payload);

    yield put(authStatus.success());
  } catch (error) {
    console.log('saga Ошибка при логировании ', error);
    yield put(authStatus.error());
    alert('Ошибка при авторизации');
  }
}
