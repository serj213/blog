import React from 'react';
import { useAuthType } from '../../../tools/hooks/useAuthType';
import { useDispatch } from 'react-redux';
import { ModalAuth } from './components/ModalAuth/ModalAuth';

const AuthContainer: React.FC = () => {

    
  return <div>
    <ModalAuth typeScreen='registr'/>

  </div>;
};

export default AuthContainer;
