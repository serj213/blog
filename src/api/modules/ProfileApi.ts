import { IAuthRes } from '../../types/auth';
import api from '../index';

const getMe = async () => {
  const response: IAuthRes = await api.get<any, Promise<IAuthRes>>('/user/auth');
  return response;
};

export const profileApi = {
  getMe,
};
