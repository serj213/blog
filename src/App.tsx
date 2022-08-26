import React from 'react';
import './App.scss';
import RootLayout from './views/Components/RootLayout/RootLayout';
import MainPage from './pages/MainPage';

const App: React.FC = () => {
  return (
    <>
      <RootLayout>
        <MainPage />
      </RootLayout>
    </>
  );
};

export default App;
