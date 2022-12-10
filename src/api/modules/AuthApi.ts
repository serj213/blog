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
  try {
    const response: IAuthRes = await api.post<Omit<IAuthReq, 'name'>, Promise<IAuthRes>>('/login', data);
    return response;
  } catch (error) {
    console.log('api Ошибка при  логировании ', error);
  }
};

export const AuthApi = {
  registration,
  login,
};