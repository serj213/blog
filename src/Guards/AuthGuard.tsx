import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { ERoutes } from '../config/routes';
import { userActions } from '../redux/profile/actions';
import { useProfile } from '../tools/hooks/useProfile';

interface IAuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<IAuthGuardProps> = ({ children }) => {
  const user = useProfile();
  const token = Cookies.get().token;
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      dispatch(userActions.getMe());
    }
  }, []);

  useEffect(() => {
    if ( !token) {
      navigate(ERoutes.main);
      window.scrollTo({ top: 0 });
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthGuard;
