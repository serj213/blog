import React from 'react';

import Container from '../Container/Container';
import Button from '../../Elements/Button/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import s from './header.module.scss';

import logo from '../../../assets/images/header/logo.svg';
import { useProfile } from '../../../tools/hooks/useProfile';
import MenuActiveUser from './components/MenuActiveUser/MenuActiveUser';
import { useDispatch } from 'react-redux';
import { authActions } from '../../../redux/auth/actions';
import { ERoutes } from '../../../config/routes';
import { userActions } from '../../../redux/profile/actions';

const Header: React.FC = () => {
  const user = useProfile();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSwitchAuth = () => {
    dispatch(authActions.setAuthType('login'));
    if (location.pathname !== ERoutes.auth) {
      navigate(ERoutes.auth);
    }
  };

  const onLogoutHandler = () => {
    dispatch(userActions.logout());
  };

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__inner}>
          <Link to={ERoutes.main} className={s.header__logo}>
            <img src={logo} alt="" />
          </Link>

          {user !== null ? (
            <>
              <MenuActiveUser
                logout={onLogoutHandler}
                avatar={user.avatar ? user.avatar : ''}
                userName={user.name ? user.name : ''}
              />
            </>
          ) : (
            <Button onClick={onSwitchAuth}>Войти</Button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
