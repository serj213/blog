import React from 'react';
import { IAuthReq, IAuthTypeScreen } from '../../../../../types/auth';
import Panel from '../../../../Components/Layouts/Panel/Panel';
import Heading from '../../../../Elements/Heading/Heading';
import Text from '../../../../Elements/Text/Text';
import FormAuth from '../FormAuth/FormAuth';


import s from './ModalAuth.module.scss';

interface IModalAuthProps {
  typeScreen: IAuthTypeScreen;
  submit:(data:IAuthReq) => void
}

export const ModalAuth: React.FC<IModalAuthProps> = ({ typeScreen , submit}) => {
  

  const textRegistr =
    'Зарегистрируйте SE_KF Аккаунт, чтобы вступить в сообщество, где можно учиться, делиться опытом и всегда быть в курсе того, что происходит в мире.';
  const textLogin = 'SE_KF уже заждался тебя! У нас накопилось много новых статей. Может и у тебя есть чем поделиться?';

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

        <FormAuth typeScreen={typeScreen} submit={submit} />
        
        
        
      </div>
    </div>
  );
};
