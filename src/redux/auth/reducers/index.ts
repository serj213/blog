import { Action, handleActions } from 'redux-actions';
import { IAuthState, IAuthReq } from '../../../types/auth';
import { EAuthActions } from '../actions';

const initialState: IAuthState = {
  formData: null,
  typeAuth: 'login',
};

export const authReducers = handleActions<IAuthState, any>(
  {
    [EAuthActions.SET_FORM_DATA]: (state, action) => ({
      ...state,
      formData: action.payload,
    }),

    [EAuthActions.SET_TYPE_AUTH]: (state, action) => ({
      ...state,
      typeAuth: action.payload,
    }),
  },
  initialState,
);
