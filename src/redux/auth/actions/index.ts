import { createAction } from 'redux-actions';
import { IAuthReq } from '../../../types/auth';

export enum EAuthActions {
  REGISTRATION = 'AUTH:REGISTRATION',
  LOGIN = 'AUTH:LOGIN',
  SET_FORM_DATA = 'AUTH:SET_FORM_DATA',
}

const registration = createAction<IAuthReq>(EAuthActions.REGISTRATION);
const login = createAction<Omit<IAuthReq, 'name'>>(EAuthActions.LOGIN);

export const authActions = {
  registration,
  login,
};
