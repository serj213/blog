import Cookies from 'js-cookie';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from '../redux/profile/actions';
import { useProfile } from '../tools/hooks/useProfile';

interface IAuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<IAuthGuardProps> = ({ children }) => {
  const user = useProfile();
  const token = Cookies.get().token;
  const dispatch = useDispatch();

  useEffect(() => {
    if(token){
      dispatch(userActions.getMe());
    }
    
  }, []);

  return <>{children}</>;
};

export default AuthGuard;
