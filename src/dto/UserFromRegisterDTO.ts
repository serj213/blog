import { IAuthRes } from '../types/auth';
import { IUserData } from '../types/profile';

class UserFromRegister {
  id: string;
  name: string;
  email: string;
  avatar: string;
  aboutMe: string;

  constructor(res: Omit<IAuthRes, 'token'>) {
    this.id = res.user.id;
    this.name = res.user.name;
    this.email = res.user.email;
    this.avatar = res.user.avatar ? res.user.avatar : '/images/no-avatar.jpeg';
    this.aboutMe = res.user.aboutMe !== null ? res.user.aboutMe : '';
  }

  toJSON(): IUserData {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      avatar: this.avatar,
      aboutMe: this.aboutMe,
    };
  }
}

export default UserFromRegister;
