import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import RootLayout from './views/Components/Layouts/RootLayout/RootLayout';
import MainRouter from './router/MainRouter';
import AuthGuard from './Guards/AuthGuard';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthGuard>
        <RootLayout>
          <MainRouter />
        </RootLayout>
      </AuthGuard>
    </BrowserRouter>
  );
};

export default App;
