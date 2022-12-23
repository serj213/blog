import { IPostDetail } from './posts';

export interface IUserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  aboutMe: string;
  postsUser: IPostDetail[] | null;
}

export interface IUserState {
  user: IUserData | null;
}

export interface IUserEditData extends Omit<IUserData, 'email' | 'avatar' | 'postsUser'> {}

export interface IUserEditRes {
  data: IUserData;
}

export interface IUserDelete {
  id: string;
}

export interface IUserSuccess {
  message: string;
}

interface IUserPost {
  // category;
}
