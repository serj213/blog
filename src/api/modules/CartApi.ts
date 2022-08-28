import api from '..';
import { ICartItemSmall, ICartState, ICartsResponse } from '../../types';
import { getCartsRequest } from '../../tools/asyncMockap';

const getCarts = async () => {
  // const response: ICartItemSmall = await api.get('/carts');

  const response: unknown = await getCartsRequest(1000);

  return response;
};

export const cartApi = {
  getCarts,
};
