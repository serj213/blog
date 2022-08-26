import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import s from './rootLayout.module.scss';

interface rootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<rootLayoutProps> = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default RootLayout;
