import React from 'react';
import { IAuthTypeScreen } from '../../../../../types/auth';
import s from './HaventAccount.module.scss';

interface IHaventAccountProps {
  changeTypeScreen: (data: IAuthTypeScreen) => void;
}

const HaventAccount: React.FC<IHaventAccountProps> = ({changeTypeScreen}) => {
  return (
    <div className={s.haventAccount}>
      <p>
        Ещё нет аккаунта? <button onClick={() => changeTypeScreen('registr')}>Скорее зарегистрируйся!</button>
      </p>
    </div>
  );
};

export default HaventAccount;
