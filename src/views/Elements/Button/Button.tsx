import React from 'react';

import s from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button className={s.button}>{children}</button>;
};

export default Button;
