import React from 'react';

import s from './Panel.module.scss';

interface IPanelProps {
  children: React.ReactNode;
}

const Panel: React.FC<IPanelProps> = ({ children }) => {
  return <div className={s.panel}>{children}</div>;
};

export default Panel;
