import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import RootLayout from './views/Components/Layouts/RootLayout/RootLayout';
import MainPage from './pages/MainPage';
import PostDetails from './pages/PostDetails';
import AuthPage from './pages/AuthPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/post/:id' element={<PostDetails />} />
          <Route path='/auth' element={<AuthPage />} />
        </Routes>

      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
