import { ICartItemSmall, ICartState } from '../../../types';

export enum ECartActions {
  GET_CART = 'CART:GET_CART',
  SET_CART = 'CART:SET_CART',
  CHANGE_CATEGORY = 'CART: CHANGE_CATEGORY',
}

const getCart = () => {
  return { type: ECartActions.GET_CART };
};

const setCart = (carts: ICartItemSmall) => {
  return { type: ECartActions.SET_CART, payload: carts };
};

export const cartActions = {
  getCart,
  setCart,
};
