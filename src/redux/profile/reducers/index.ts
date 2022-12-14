import { handleActions } from 'redux-actions';
import { IUserState } from '../../../types/profile';
import { EUserActions } from '../actions';

const initialState: IUserState = {
  user: null,
};

export const userReducers = handleActions<IUserState, any>(
  {
    [EUserActions.SET_PROFILE]: (state, action) => ({
      ...state,
      user: action.payload,
    }),

    [EUserActions.RESET_PROFILE]: (state, action) => ({
      ...state,
      user: null,
    }),

    [EUserActions.SET_EDIT_PROFILE]: (state, action) => {
      return {
        ...state,
        user: action.payload,
      };
    },
  },
  initialState,
);
