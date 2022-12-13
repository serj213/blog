import React from 'react';
import { Link } from 'react-router-dom';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  seeMore?: boolean;
  disable?: boolean;
  href?: string;
  fullWidth?:boolean
}

const Button: React.FC<ButtonProps> = ({ children, onClick, seeMore = false, disable = false, href, fullWidth }) => {
  if (seeMore) {
    return (
      <div className={s.button__box}>
        <button onClick={onClick} className={s.button__see}>
          {children}
        </button>
      </div>
    );
  }
  return !href ? (
    <button onClick={onClick} className={`${s.button} ${fullWidth && s.fullWidth}`} disabled={disable}>
      {children}
    </button>
  ) : (
    <Link to={href} className={s.button}>
      {children}
    </Link>
  );
};

export default Button;
