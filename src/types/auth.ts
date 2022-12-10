export interface IAuthRes {
  name: string;
  id: string;
  email: string;
  token: string;
}

export interface IAuthReq {
  name: string;
  email: string;
  password: string;
}

export type IAuthTypeScreen = 'login' | 'registr';

export interface IAuthState {
  formData: IAuthReq | null;
  typeAuth: IAuthTypeScreen;
}
