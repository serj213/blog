import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  seeMore?: boolean;
  disable?:boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, seeMore = false, disable = false }) => {
  if (seeMore) {
    return (
      <div className={s.button__box}>
        <button onClick={onClick} className={s.button__see} disabled={disable}>{children}</button>
      </div>
    );
  }
  return <button className={s.button}>{children}</button>;
};

export default Button;
