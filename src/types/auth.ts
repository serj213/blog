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

export interface IAuthFormData {
  formData: IAuthReq | null;
}
