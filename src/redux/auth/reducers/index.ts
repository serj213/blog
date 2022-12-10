import { Action, handleActions } from 'redux-actions';
import { IAuthFormData, IAuthReq } from '../../../types/auth';
import { EAuthActions } from '../actions';

const initialState: IAuthFormData = {
  formData: null,
};

export const authReducers = handleActions<IAuthFormData, any>(
  {
    [EAuthActions.SET_FORM_DATA]: (state, action) => ({
      ...state,
      formData: action.payload,
    }),
  },
  initialState,
);
