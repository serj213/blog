import React from 'react';

import NewsContainer from '../views/Containers/NewsContainer/NewsContainer';
import SearchContainer from '../views/Containers/SearchContainer/SearchContainer';

const MainPage: React.FC = () => {
  return (
    <>
      <SearchContainer />
      <NewsContainer />
    </>
  );
};

export default MainPage;
