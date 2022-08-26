import React from 'react';

import s from './container.module.scss';

interface containerProps {
  children: React.ReactNode;
}

const Container: React.FC<containerProps> = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default Container;
