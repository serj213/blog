import React from 'react';

import s from './GridSeconds.module.scss';

interface IGridSecondsProps {
  children: React.ReactNode;
}

const GridSeconds: React.FC<IGridSecondsProps> = ({ children }) => {
  return <div className={s.grid}>{children}</div>;
};

export default GridSeconds;
