import { ECartActions } from '../actions';
import { ICartState } from '../../../types/carts';

const initialState: ICartState = {
  carts: null,
  category: 0,
};

export const cartReducers = (state = initialState, action: any) => {
  switch (action.type) {
    case ECartActions.SET_CART:
      return {
        ...state,
        carts: action.payload,
      };

    case ECartActions.CHANGE_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };

    default:
      return state;
  }
};
