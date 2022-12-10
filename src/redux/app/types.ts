import { EAppStatus } from './actions';

type TCartStatus = EAppStatus.CART_PENDING | EAppStatus.CART_SUCCESS | EAppStatus.CART_ERROR;

type TPostDetailStatus = EAppStatus.DETAILS_PENDING | EAppStatus.CART_SUCCESS | EAppStatus.CART_ERROR;

type TAuthStatus = EAppStatus.AUTH_PENDING | EAppStatus.AUTH_SUCCESS | EAppStatus.AUTH_ERROR;

export interface IAppState {
  cartsStatus: TCartStatus;
  postDetailStatus: TPostDetailStatus;
  authStatus: TAuthStatus;
}
