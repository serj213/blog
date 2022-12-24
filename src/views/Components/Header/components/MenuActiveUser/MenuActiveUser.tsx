import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IUserData } from '../../../../../types/profile';
import BoxElements from '../../../../Elements/BoxElements/BoxElements';

import s from './MenuActiveUser.module.scss';

interface IMenuActiveUser {
  userName: string;
  avatar: string;
  logout: () => void;
  user: IUserData;
}

const MenuActiveUser: React.FC<IMenuActiveUser> = ({ userName, avatar, logout, user }) => {
  const [menuProfile, setMenuProfile] = useState(false);
  const menuRef = useRef(null);
  const navigation = useNavigate();

  useEffect(() => {
    const outsideClick = (e: MouseEvent) => {
      if (menuRef.current && !e.composedPath().includes(menuRef.current)) {
        setMenuProfile(false);
      }
    };
    document.body.addEventListener('click', outsideClick);

    return () => document.body.removeEventListener('click', outsideClick);
  }, []);

  const visibleMenuList = () => {
    setMenuProfile(true);
  };

  const goToProfile = () => {
    navigation(`profile/${user.id}`);
    setMenuProfile(false);
  };

  return (
    <div ref={menuRef} className={s.menuActiveUser}>
      <BoxElements click={visibleMenuList} modificators={{ flex: true, alignItems: 'center', cursorPointer: true }}>
        <div>{userName}</div>
        <div className={s.menuActiveUser__avatar}>
          <img src={avatar} alt="" />
        </div>
      </BoxElements>

      {menuProfile && (
        <ul className={s.menuActiveUser__list}>
          <li>
            <button onClick={goToProfile}>Профиль</button>
          </li>
          <li>
            <button onClick={logout}>Выйти</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuActiveUser;
