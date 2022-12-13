import { IAuthReq, IAuthRes } from '../../types/auth';
import api from '../index';

const registration = async (data: IAuthReq) => {
  try {
    const response: IAuthRes = await api.post<IAuthReq, Promise<IAuthRes>>('/restration', data);
    return response;
  } catch (error) {
    console.log('api Ошибка при регистрации ', error);
  }
};

const login = async (data: Omit<IAuthReq, 'name'>) => {
  const response: IAuthRes = await api.post<Omit<IAuthReq, 'name'>, Promise<IAuthRes>>('/user/login', data);
  return response;
};

export const AuthApi = {
  registration,
  login,
};
