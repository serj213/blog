import { IAuthRes } from '../types/auth';
import { IPostDetail } from '../types/posts';
import { IUserData } from '../types/profile';

class UserFromRegister {
  id: string;
  name: string;
  email: string;
  avatar: string;
  aboutMe: string;
  postsUser: IPostDetail[] | null;

  constructor(res: Omit<IAuthRes, 'token'>) {
    this.id = res.user.id;
    this.name = res.user.name;
    this.email = res.user.email;
    this.avatar = res.user.avatar ? res.user.avatar : '/images/no-avatar.jpeg';
    this.aboutMe = res.user.aboutMe !== null ? res.user.aboutMe : '';
    this.postsUser = res.user.postsUser && res.user.postsUser.length ? res.user.postsUser : null;
  }

  toJSON(): IUserData {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      avatar: this.avatar,
      aboutMe: this.aboutMe,
      postsUser: this.postsUser,
    };
  }
}

export default UserFromRegister;
