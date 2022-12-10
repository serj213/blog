import { createAction } from 'redux-actions';
import { IAuthReq, IAuthTypeScreen } from '../../../types/auth';

export enum EAuthActions {
  REGISTRATION = 'AUTH:REGISTRATION',
  LOGIN = 'AUTH:LOGIN',
  SET_FORM_DATA = 'AUTH:SET_FORM_DATA',
  SET_TYPE_AUTH = 'AUTH:SET_TYPE_AUTH',
}

const registration = createAction<IAuthReq>(EAuthActions.REGISTRATION);
const login = createAction<Omit<IAuthReq, 'name'>>(EAuthActions.LOGIN);
const setAuthType = createAction<IAuthTypeScreen>(EAuthActions.SET_TYPE_AUTH);

export const authActions = {
  registration,
  login,
  setAuthType,
};
