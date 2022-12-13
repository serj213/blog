import React, { useEffect } from 'react';
import { IAuthReq, IAuthTypeScreen } from '../../../../../types/auth';
import Heading from '../../../../Elements/Heading/Heading';
import Text from '../../../../Elements/Text/Text';
import { Field, FieldError, useForm } from 'react-hook-form';
import Button from '../../../../Elements/Button/Button';

import s from './ModalAuth.module.scss';
import { validateEmail, validateName, validatePassword } from '../../../../../tools/validate';

interface IModalAuthProps {
  typeScreen: IAuthTypeScreen;
  submit:(data:IAuthReq) => void
}

export const ModalAuth: React.FC<IModalAuthProps> = ({ typeScreen , submit}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
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
    submit(data)
  };

  useEffect(() => {
      console.log('errors ', errors);
      
  },[errors])

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
            marginBottom: '40',
          }}
        >
          <p>{typeScreen === 'registr' ? textRegistr : textLogin}</p>
        </Text>

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={s.inputsWrapper}>
            {typeScreen === 'registr' && (
              <div className={s.inputBox}>
                <input
                  className={`${errors.name && s.error}`}
                  {...register('name', { validate: validateName })}
                  hidden={typeScreen !== 'registr'}
                  placeholder={'Ваше имя'}
                />
                <label htmlFor="">{errors.name?.message}</label>
              </div>
            )}

            <div className={s.inputBox}>
              <input
                className={`${errors.email && s.error}`}
                {...register('email', { validate: validateEmail })}
                placeholder={'Ваша почта'}
              />
              <label htmlFor="">{errors.email?.message}</label>
            </div>
            <div className={s.inputBox}>
              <input
                type='password'
                className={`${errors.password && s.error}`}
                {...register('password', { validate: validatePassword })}
                placeholder="Введите пароль"
              />
              <label htmlFor="">{errors.password?.message}</label>
            </div>
          </div>

          <Text
            modificators={{
              size: 'ultra-small',
              positions: 'center',
              color: 'text-second',
              marginBottom:'15'
            }}
          >
            <p>
              Нажимая на кнопку «Зарегистрироваться», вы соглашаетесь с Условиями пользования сайтом и Политикой сайта
            </p>
          </Text>

          <div className={s.btnBox}>
            <Button fullWidth disable={!isValid}>{typeScreen === 'login' ? 'Войти' : 'Зарегистрироваться'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
