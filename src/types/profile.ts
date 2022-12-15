export interface IUserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  aboutMe: string;
}

export interface IUserState {
  user: IUserData | null;
}

export interface IUserEditData extends Omit<IUserData, 'email' | 'avatar'> {}

export interface IUserEditRes {
  data: IUserData;
}
