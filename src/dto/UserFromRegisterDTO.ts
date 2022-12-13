import { IAuthRes } from '../types/auth';
import { IUserData } from '../types/profile';

class UserFromRegister {
  id: string;
  name: string;
  email: string;
  avatar: string;

  constructor(res: IAuthRes) {
    console.log('res ', res);

    this.id = res.user.id;
    this.name = res.user.name;
    this.email = res.user.email;
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
