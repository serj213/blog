import { createAction } from 'redux-actions';
import { IUserData } from '../../../types/profile';

export enum EUserActions {
  SET_PROFILE = 'PROFILE:SET_PROFILE',
  GET_ME = 'PROFILE:GET_ME',
  LOGOUT = 'PROFILE:LOGOUT',
  RESET_PROFILE = 'PROFILE:RESET',
}

const setProfile = createAction<IUserData>(EUserActions.SET_PROFILE);
const getMe = createAction(EUserActions.GET_ME);
const logout = createAction(EUserActions.LOGOUT);
const resetProfile = createAction(EUserActions.RESET_PROFILE);

export const userActions = {
  setProfile,
  getMe,
  logout,
  resetProfile,
};
