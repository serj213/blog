import React from 'react';
import { useAuthType } from '../../../tools/hooks/useAuthType';
import { useDispatch } from 'react-redux';
import { ModalAuth } from './components/ModalAuth/ModalAuth';
import { IAuthReq, IAuthTypeScreen } from '../../../types/auth';
import { authActions } from '../../../redux/auth/actions';
import { useNavigate } from 'react-router-dom';
import { ERoutes } from '../../../config/routes';
import HaventAccount from './components/HaventAccount/HaventAccount';

const AuthContainer: React.FC = () => {
  const dispatch = useDispatch();
  const authType = useAuthType();
  const navigate = useNavigate();

  const onSubmitRegistrationData = (data: Omit<IAuthReq, 'redirect'>) => {
    dispatch(authActions.registration({ ...data, redirect: () => redirectToMainPage() }));
  };

  const onSubmitLoginData = (data: Omit<IAuthReq, 'redirect'>) => {
    const { name, ...obj } = data;
    const loginData = { ...obj, redirect: () => redirectToMainPage() };
    dispatch(authActions.login(loginData));
  };

  const redirectToMainPage = () => {
    navigate(ERoutes.main);
  };

  const changeAuthScreen = (typeScreen: IAuthTypeScreen) => {
    dispatch(authActions.setAuthType('registr'));
  };

  return (
    <>
      <ModalAuth submit={authType === 'registr' ? onSubmitRegistrationData : onSubmitLoginData} typeScreen={authType} />
      {authType === 'login' && <HaventAccount changeTypeScreen={changeAuthScreen} />}
    </>
  );
};

export default AuthContainer;
