import React from 'react';
import { useForm } from 'react-hook-form';
import { validateEmail, validateName, validatePassword } from '../../../../../tools/validate';
import { IAuthReq, IAuthTypeScreen } from '../../../../../types/auth';
import Text from '../../../../Elements/Text/Text';
import Button from '../../../../Elements/Button/Button';

import s from './FormAuth.module.scss';

interface IFormAuthProps {
  typeScreen: IAuthTypeScreen;
  submit: (data: Omit<IAuthReq, 'redirect'>) => void;
}

const FormAuth: React.FC<IFormAuthProps> = ({ typeScreen, submit }) => {
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

  const onSubmit = (data: Omit<IAuthReq, 'redirect'>) => {
    submit(data);
  };

  return (
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
            type="password"
            className={`${errors.password && s.error}`}
            {...register('password', { validate: validatePassword })}
            placeholder="Введите пароль"
          />
          <label htmlFor="">{errors.password?.message}</label>
        </div>
      </div>

      {typeScreen === 'registr' && (
        <Text
          modificators={{
            size: 'ultra-small',
            positions: 'center',
            color: 'text-second',
            marginBottom: '15',
          }}
        >
          <p>
            Нажимая на кнопку «Зарегистрироваться», вы соглашаетесь с Условиями пользования сайтом и Политикой сайта
          </p>
        </Text>
      )}

      <div className={s.btnBox}>
        <Button fullWidth disable={!isValid}>
          {typeScreen === 'login' ? 'Войти' : 'Зарегистрироваться'}
        </Button>
      </div>
    </form>
  );
};

export default FormAuth;
