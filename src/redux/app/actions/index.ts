export enum EAppStatus {
  CART_PENDING = 'CARTS:PENDING',
  CART_SUCCESS = 'CARTS:SUCCESS',
  CART_ERROR = 'CARTS:ERROR',

  DETAILS_PENDING = 'APP_DETAILS:PENDING',
  DETAILS_SUCCESS = 'APP_DETAILS:SUCCESS',
  DETAILS_ERROR = 'APP_DETAILS:ERROR'
}



const appCartsPending = () => ({ type: EAppStatus.CART_PENDING });
const appCartsSuccess = () => ({ type: EAppStatus.CART_SUCCESS });
const appCartsError = () => ({ type: EAppStatus.CART_ERROR });

const appDetailsPending = () => ({ type: EAppStatus.DETAILS_PENDING })
const appDetailsSuccess = () => ({ type: EAppStatus.DETAILS_SUCCESS })
const appDetailsError = () => ({ type: EAppStatus.DETAILS_ERROR })



export const appCarts = {
  pending: appCartsPending,
  success: appCartsSuccess,
  error: appCartsError,
};

export const appDetailsStatus = {
  pending: appDetailsPending,
  success: appDetailsSuccess,
  error: appDetailsError
}