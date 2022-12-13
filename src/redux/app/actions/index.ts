export enum EAppStatus {
  CART_PENDING = 'CARTS:PENDING',
  CART_SUCCESS = 'CARTS:SUCCESS',
  CART_ERROR = 'CARTS:ERROR',

  DETAILS_PENDING = 'APP_DETAILS:PENDING',
  DETAILS_SUCCESS = 'APP_DETAILS:SUCCESS',
  DETAILS_ERROR = 'APP_DETAILS:ERROR',

  AUTH_PENDING = 'AUTH:PENDING',
  AUTH_SUCCESS = 'AUTH:SUCCESS',
  AUTH_ERROR = 'AUTH:ERROR',

  PROFILE_PENDING = 'PROFILE:PENDING',
  PROFILE_SUCCESS = 'PROFILE:SUCCESS',
  PROFILE_ERROR = 'PROFILE:ERROR',
}

const appCartsPending = () => ({ type: EAppStatus.CART_PENDING });
const appCartsSuccess = () => ({ type: EAppStatus.CART_SUCCESS });
const appCartsError = () => ({ type: EAppStatus.CART_ERROR });

const appDetailsPending = () => ({ type: EAppStatus.DETAILS_PENDING });
const appDetailsSuccess = () => ({ type: EAppStatus.DETAILS_SUCCESS });
const appDetailsError = () => ({ type: EAppStatus.DETAILS_ERROR });

const authPending = () => ({ type: EAppStatus.AUTH_PENDING });
const authSuccess = () => ({ type: EAppStatus.AUTH_SUCCESS });
const authError = () => ({ type: EAppStatus.AUTH_ERROR });

const profilePending = () => ({ type: EAppStatus.PROFILE_PENDING });
const profileSuccess = () => ({ type: EAppStatus.PROFILE_SUCCESS });
const profileError = () => ({ type: EAppStatus.PROFILE_ERROR });

export const appCarts = {
  pending: appCartsPending,
  success: appCartsSuccess,
  error: appCartsError,
};

export const appDetailsStatus = {
  pending: appDetailsPending,
  success: appDetailsSuccess,
  error: appDetailsError,
};

export const authStatus = {
  pending: authPending,
  success: authSuccess,
  error: authError,
};

export const profileStatus = {
  pending: profilePending,
  success: profileSuccess,
  error: profileError,
};
