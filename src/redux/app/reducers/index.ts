import { EAppStatus } from '../actions';
import { IAppState } from '../types';

const initialState: IAppState = {
  cartsStatus: EAppStatus.CART_PENDING,
  postDetailStatus: EAppStatus.DETAILS_PENDING,
  authStatus: EAppStatus.AUTH_PENDING,
  profileStatus: EAppStatus.PROFILE_PENDING,
};

export const appReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case EAppStatus.CART_PENDING:
      return {
        ...state,
        cartsStatus: EAppStatus.CART_PENDING,
      };

    case EAppStatus.CART_SUCCESS:
      return {
        ...state,
        cartsStatus: EAppStatus.CART_SUCCESS,
      };

    case EAppStatus.CART_ERROR:
      return {
        ...state,
        cartsStatus: EAppStatus.CART_ERROR,
      };

    case EAppStatus.DETAILS_PENDING:
      return {
        ...state,
        postDetailStatus: EAppStatus.DETAILS_PENDING,
      };

    case EAppStatus.DETAILS_SUCCESS:
      return {
        ...state,
        postDetailStatus: EAppStatus.DETAILS_SUCCESS,
      };

    case EAppStatus.DETAILS_ERROR:
      return {
        ...state,
        postDetailStatus: EAppStatus.DETAILS_ERROR,
      };

    case EAppStatus.AUTH_PENDING:
      return {
        ...state,
        authStatus: EAppStatus.AUTH_PENDING,
      };

    case EAppStatus.AUTH_SUCCESS:
      return {
        ...state,
        authStatus: EAppStatus.AUTH_SUCCESS,
      };

    case EAppStatus.AUTH_ERROR:
      return {
        ...state,
        authStatus: EAppStatus.AUTH_ERROR,
      };

    case EAppStatus.PROFILE_PENDING:
      return {
        ...state,
        profileStatus: EAppStatus.PROFILE_PENDING,
      };

    case EAppStatus.PROFILE_SUCCESS:
      return {
        ...state,
        profileStatus: EAppStatus.PROFILE_SUCCESS,
      };

    case EAppStatus.PROFILE_ERROR:
      return {
        ...state,
        profileStatus: EAppStatus.PROFILE_ERROR,
      };

    default:
      return state;
  }
};
