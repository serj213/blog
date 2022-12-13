export interface IUserData {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface IUserState {
  user: IUserData | null;
}
