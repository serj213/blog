import { IAuthRes } from '../../types/auth';
import { IUserData, IUserEditData, IUserEditRes } from '../../types/profile';
import api from '../index';

const getMe = async () => {
  const response: IAuthRes = await api.get<any, Promise<IAuthRes>>('/user/auth');
  return response;
};

const edit = async (data: IUserEditData) => {
  const editReq = {
    name: data.name,
    aboutMe: data.aboutMe,
  };
  const response: IUserEditRes = await api.put<IUserData, IUserEditRes>(`/profile/edit/${data.id}`, editReq);
  return response;
};

export const profileApi = {
  getMe,
  edit,
};
