import { IUserData } from './profile';

export interface IAuthRes {
  user: IUserData;
  token: string;
}

export interface IAuthReq {
  name: string;
  email: string;
  password: string;
  redirect: () => void;
}

export interface IAuthReqLogin extends Omit<IAuthReq, 'name'> {}

export type IAuthTypeScreen = 'login' | 'registr';

export interface IAuthState {
  formData: IAuthReq | null;
  typeAuth: IAuthTypeScreen;
}
