import { EAppCartsStatus } from '../actions';
import { IAppState } from '../types';

const initialState: IAppState = {
  cartsStatus: EAppCartsStatus.PENDING,
};

export const appReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case EAppCartsStatus.PENDING:
      return {
        ...state,
        cartStatus: EAppCartsStatus.PENDING,
      };

    case EAppCartsStatus.SUCCESS:
      return {
        ...state,
        cartStatus: EAppCartsStatus.SUCCESS,
      };

    case EAppCartsStatus.ERROR:
      return {
        ...state,
        cartStatus: EAppCartsStatus.ERROR,
      };

    default:
      return state;
  }
};
