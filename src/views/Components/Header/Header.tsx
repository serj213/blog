import React from 'react';

import Container from '../Container/Container';
import Button from '../../Elements/Button/Button';

import s from './header.module.scss';

import logo from '../../../assets/images/header/logo.svg';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Container>
        <div className={s.header__inner}>
          <a className={s.header__logo}>
            <img src={logo} alt="" />
          </a>

          <Button>Связь со мной</Button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
