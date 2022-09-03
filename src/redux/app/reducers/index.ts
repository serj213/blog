import { EAppStatus } from '../actions';
import { IAppState } from '../types';

const initialState: IAppState = {
  cartsStatus: EAppStatus.CART_PENDING,
  postDetailStatus: EAppStatus.DETAILS_PENDING
};

export const appReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case EAppStatus.CART_PENDING:
      return {
        ...state,
        cartsStatus: EAppStatus.CART_PENDING
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
        postDetailStatus: EAppStatus.DETAILS_PENDING
      }

    case EAppStatus.DETAILS_SUCCESS:
      return {
        ...state,
        postDetailStatus: EAppStatus.DETAILS_SUCCESS
      }


    case EAppStatus.DETAILS_ERROR:
      return {
        ...state,
        postDetailStatus: EAppStatus.DETAILS_ERROR
      }


    default:
      return state;
  }
};
