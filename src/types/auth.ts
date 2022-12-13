import { IUserData } from './profile';

export interface IAuthRes {
  user: IUserData;
  token: string;
}

export interface IAuthReq {
  name: string;
  email: string;
  password: string;
}

export interface IAuthReqLogin extends Omit<IAuthReq, 'name'> {
  redirect: () => void;
}

export type IAuthTypeScreen = 'login' | 'registr';

export interface IAuthState {
  formData: IAuthReq | null;
  typeAuth: IAuthTypeScreen;
}
