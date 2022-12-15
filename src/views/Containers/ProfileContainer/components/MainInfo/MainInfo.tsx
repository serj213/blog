import React from 'react';
import { useForm } from 'react-hook-form';
import { IUserData, IUserEditData } from '../../../../../types/profile';
import BoxElements from '../../../../Elements/BoxElements/BoxElements';
import Button from '../../../../Elements/Button/Button';

import s from './MainInfo.module.scss';

interface IMainInfoProps {
  user: IUserData;
  editHandler:(data:IUserEditData) => void
}

const MainInfo: React.FC<IMainInfoProps> = ({ user, editHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: user.name,
      aboutMe: user.aboutMe,
    },
  });

  const onSubmit = (data:Omit<IUserEditData, 'id'>) => {
    const obj = {...data, id:user.id}
    editHandler(obj)
  }

  return (
    <div className={s.mainInfo}>
      <BoxElements modificators={{ flex: true, justifyContent: 'space-between', alignItems: 'center' }}>
        <div className={s.mainInfo__avatar}>
          <img src={user.avatar} alt="" />
        </div>
        <div className={s.mainInfo__fieldsMain}>
          <div className={s.mainInfo__field}>
            <label htmlFor="">Имя пользователя:</label>
            <input type="text" {...register('name')}  />
          </div>
          <div className={s.mainInfo__field}>
            <label htmlFor="">E-mail</label>
            <p>{user.email}</p>
          </div>
        </div>
      </BoxElements>
      <div className={s.mainInfo__middle}>
        <div className={s.mainInfo__field}>
          <label htmlFor="">О себе:</label>
          <textarea placeholder="Расскажите о себе..." {...register('aboutMe')}></textarea>
        </div>
      </div>
      <BoxElements
        modificators={{
          flex: true,
          justifyContent: 'space-between',
        }}
      >
        <Button onClick={handleSubmit(onSubmit)}>Сохранить</Button>
        <button className={s.mainInfo__delete}>Удалить профиль</button>
      </BoxElements>
    </div>
  );
};

export default MainInfo;
