import { AxiosError } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { IApiError } from '../../../api/apiError';
import { profileApi } from '../../../api/modules/ProfileApi';
import UserFromRegister from '../../../dto/UserFromRegisterDTO';
import notifications from '../../../tools/notifications';
import { IAuthRes } from '../../../types/auth';
import { IUserData } from '../../../types/profile';
import { profileStatus } from '../../app/actions';
import { EUserActions, userActions } from '../actions';

export function* profileSagas() {
  yield takeLatest(EUserActions.GET_ME, executeGetMe);
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
