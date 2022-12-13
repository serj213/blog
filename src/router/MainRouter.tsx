import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ERoutes } from '../config/routes';
import AuthPage from '../pages/AuthPage';
import MainPage from '../pages/MainPage';
import PostDetails from '../pages/PostDetails';

const MainRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={ERoutes.main} element={<MainPage />} />
      <Route path={ERoutes.singlePost} element={<PostDetails />} />
      <Route path={ERoutes.auth} element={<AuthPage />} />
    </Routes>
  );
};

export default MainRouter;
