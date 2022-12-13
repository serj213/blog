import { createAction } from 'redux-actions';
import { IUserData } from '../../../types/profile';

export enum EUserActions {
  SET_PROFILE = 'PROFILE:SET_PROFILE',
  GET_ME = 'PROFILE:GET_ME',
}

const setProfile = createAction<IUserData>(EUserActions.SET_PROFILE);
const getMe = createAction(EUserActions.GET_ME);

export const userActions = {
  setProfile,
  getMe,
};
