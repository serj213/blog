import React from 'react';
import { useAuthType } from '../../../tools/hooks/useAuthType';
import { useDispatch } from 'react-redux';
import { ModalAuth } from './components/ModalAuth/ModalAuth';
import { IAuthReq } from '../../../types/auth';
import { authActions } from '../../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../../../config/routes';

const AuthContainer: React.FC = () => {
  const dispatch = useDispatch();
  const authType = useAuthType();
  const navigate = useNavigate()

  const onSubmitRegistrationData = (data: IAuthReq) => {
    dispatch(authActions.registration(data));
  };

  const onSubmitLoginData = (data: IAuthReq) => {
    const { name, ...obj } = data;
    const loginData = {...obj, redirect:() => redirectToMainPage()}
    dispatch(authActions.login(loginData));
  };

  const redirectToMainPage = () => {
    navigate(ERoutes.main)
  }

  return (
    <div>
      <ModalAuth submit={authType === 'registr' ? onSubmitRegistrationData : onSubmitLoginData} typeScreen={authType} />
    </div>
  );
};

export default AuthContainer;
