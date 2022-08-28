import React from 'react';
import Category from './components/Category/Category';

const NewsContainer: React.FC = () => {
  const categoryData = [
    {
      id: 0,
      text: 'Общее',
    },
    {
      id: 1,
      text: 'Карьера',
    },
    {
      id: 2,
      text: 'Здоровье',
    },
    {
      id: 3,
      text: 'Жизнь',
    },
    {
      id: 4,
      text: 'Хобби',
    },
  ];

  return (
    <>
      <Category category={categoryData} categoryActive={0} changeCategory={() => {}} />
    </>
  );
};

export default NewsContainer;
