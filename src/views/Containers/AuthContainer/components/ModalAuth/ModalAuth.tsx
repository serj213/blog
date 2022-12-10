import React from 'react';
import { IAuthReq, IAuthTypeScreen } from '../../../../../types/auth';
import Heading from '../../../../Elements/Heading/Heading';
import Text from '../../../../Elements/Text/Text';
import { useForm } from 'react-hook-form';
import Button from '../../../../Elements/Button/Button';

import s from './ModalAuth.module.scss';

interface IModalAuthProps {
  typeScreen: IAuthTypeScreen;
  // submit:(data:IAuthReq) => void
}

export const ModalAuth: React.FC<IModalAuthProps> = ({ typeScreen }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const textRegistr =
    'Зарегистрируйте SE_KF Аккаунт, чтобы вступить в сообщество, где можно учиться, делиться опытом и всегда быть в курсе того, что происходит в мире.';
  const textLogin = 'SE_KF уже заждался тебя! У нас накопилось много новых статей. Может и у тебя есть чем поделиться?';

  const onSubmit = (data: IAuthReq) => {
    // submit(data)
  };

  return (
    <div className={s.wrapper}>
      <div className={s.body}>
        <Heading
          modificators={{
            weight: '700',
            size: 'small',
            color: 'blue-dark',
            position: 'center',
            marginBottom: '20',
          }}
        >
          <h2>{typeScreen === 'registr' ? 'Регистрация' : 'Добро Пожаловать'}</h2>
        </Heading>

        <Text
          modificators={{
            size: 'ultra-small',
            color: 'grey',
            positions: 'center',
            marginBottom:'15'
          }}
        >
          <p>{typeScreen === 'registr' ? textRegistr : textLogin}</p>
        </Text>

        <form onSubmit={handleSubmit(onSubmit)}>
          {typeScreen === 'registr' && (
            <div className={s.inputBox}>
              <label htmlFor=""></label>
              <input className={s.input} {...register('name')} hidden={typeScreen !== 'registr'} />
            </div>
          )}

          <div className={s.inputBox}>
            <label htmlFor=""></label>
            <input {...register('email')} />
          </div>
          <div className={s.inputBox}>
            <label htmlFor=""></label>
            <input {...register('password')} />
          </div>

          <div className={s.btnBox}>
            <Button>
                {
                    typeScreen === 'login' ? 'Войти' : 'Регистрация'
                }
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
