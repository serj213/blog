import { IAuthRes } from '../types/auth';
import { IUserData } from '../types/profile';

class UserFromRegister {
  id: string;
  name: string;
  email: string;
  avatar: string;

  constructor(res: IAuthRes) {
    this.id = res.id;
    this.name = res.name;
    this.email = res.email;
    this.avatar = './images/no-avatar.jpeg';
  }

  toJSON(): IUserData {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      avatar: this.avatar,
    };
  }
}

export default UserFromRegister;
