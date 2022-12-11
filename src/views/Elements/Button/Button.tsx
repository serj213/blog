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
        <button  onClick={onClick} className={s.button__see}>{children}</button>
      </div>
    );
  }
  return <button  onClick={onClick} className={s.button} disabled={disable}>{children}</button>;
};

export default Button;
