import { createAction } from 'redux-actions';
import { IUserData, IUserEditData, IUserEditRes } from '../../../types/profile';

export enum EUserActions {
  SET_PROFILE = 'PROFILE:SET_PROFILE',
  GET_ME = 'PROFILE:GET_ME',
  LOGOUT = 'PROFILE:LOGOUT',
  RESET_PROFILE = 'PROFILE:RESET',
  EDIT_PROFILE = 'PROFILE:EDIT_PROFILE',
  SET_EDIT_PROFILE = 'PROFILE: SET_EDIT_PROFILE',
}

const setProfile = createAction<IUserData>(EUserActions.SET_PROFILE);
const getMe = createAction(EUserActions.GET_ME);
const logout = createAction(EUserActions.LOGOUT);
const resetProfile = createAction(EUserActions.RESET_PROFILE);
const editProfile = createAction<IUserEditData>(EUserActions.EDIT_PROFILE);
const setEditProfile = createAction<IUserData>(EUserActions.SET_EDIT_PROFILE);

export const userActions = {
  setProfile,
  getMe,
  logout,
  resetProfile,
  editProfile,
  setEditProfile,
};
