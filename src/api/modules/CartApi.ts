import api from '..';
import { ICartItemSmall, ICartState } from '../../types';

const getCarts = async () => {
  const response: ICartItemSmall = await api.get('/carts');

  return response;
};

export const cartApi = {
  getCarts,
};
