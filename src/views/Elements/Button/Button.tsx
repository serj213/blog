import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: void;
  seeMore?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, seeMore = false }) => {
  if (seeMore) {
    return (
      <div className={s.button__box}>
        <button className={s.button__see}>{children}</button>
      </div>
    );
  }
  return <button className={s.button}>{children}</button>;
};

export default Button;
