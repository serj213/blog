export enum EAppCartsStatus {
  PENDING = 'CARTS:PENDING',
  SUCCESS = 'CARTS:SUCCESS',
  ERROR = 'CARTS:ERROR',
}

const appCartsPending = () => ({ type: EAppCartsStatus.PENDING });
const appCartsSuccess = () => ({ type: EAppCartsStatus.SUCCESS });
const appCartsError = () => ({ type: EAppCartsStatus.ERROR });

export const appCarts = {
  pending: appCartsPending,
  success: appCartsSuccess,
  error: appCartsError,
};
