import React, { useState } from 'react';

import Container from '../Container/Container';
import Button from '../../Elements/Button/Button';
import { Link } from 'react-router-dom';

import s from './header.module.scss';

import logo from '../../../assets/images/header/logo.svg';
import Text from '../../Elements/Text/Text';
import { ERoutes } from '../../../config/routes';
import { useProfile } from '../../../tools/hooks/useProfile';
import BoxElements from '../../Elements/BoxElements/BoxElements';
import MenuActiveUser from './components/MenuActiveUser/MenuActiveUser';

const Header: React.FC = () => {
  const user = useProfile();

  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__inner}>
          <a className={s.header__logo}>
            <img src={logo} alt="" />
          </a>

          {user !== null ? (
            <>
           
            <MenuActiveUser avatar={user.avatar ? user.avatar : ''} userName={user.name ? user.name : ''}/>
            
            </>
              
            
            
          ) : (
            <Button href={ERoutes.auth}>Войти</Button>
          )}
        </div>
      </Container>
    </header>
  );
};

export default Header;
