import { createAction } from 'redux-actions';
import { IUserData } from '../../../types/profile';

export enum EUserActions {
  SET_PROFILE = 'PROFILE:SET_PROFILE',
}

const setProfile = createAction<IUserData>(EUserActions.SET_PROFILE);

export const userActions = {
  setProfile,
};
