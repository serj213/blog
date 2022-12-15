import { IAuthRes } from '../../types/auth';
import { IUserData, IUserDelete, IUserEditData, IUserEditRes } from '../../types/profile';
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

const deleteProfile = async (data: IUserDelete) => {
  const response = await api.delete(`profile/${data.id}`);

  return response.data;
};

export const profileApi = {
  getMe,
  edit,
  deleteProfile,
};
