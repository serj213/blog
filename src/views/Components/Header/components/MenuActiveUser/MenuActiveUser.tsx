import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import BoxElements from '../../../../Elements/BoxElements/BoxElements';

import s from './MenuActiveUser.module.scss';

interface IMenuActiveUser {
  userName: string;
  avatar: string;
}

const MenuActiveUser: React.FC<IMenuActiveUser> = ({ userName, avatar }) => {
  const [menuProfile, setMenuProfile] = useState(false);
  const menuRef = useRef(null);

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
    setMenuProfile(true)
  }

  return (
    <div ref={menuRef} className={s.menuActiveUser}>
      <BoxElements click={visibleMenuList} modificators={{ flex: true, alignItems: 'center', cursorPointer:true }}>
        <div>{userName}</div>
        <div className={s.menuActiveUser__avatar}>
          <img src={avatar} alt="" />
        </div>
      </BoxElements>

      {menuProfile && (
        <ul className={s.menuActiveUser__list}>
          <li>
            <Link to={'/profile'}>Профиль</Link>
          </li>
          <li>
            <button>Выйти</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MenuActiveUser;
