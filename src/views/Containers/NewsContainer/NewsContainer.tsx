import React from 'react';
import Category from './components/Category/Category';
import News from './components/News/News';
import { useNews } from '../../../tools/hooks/useNews';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/carts/actions';

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

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(cartActions.getCart());
  }, []);

  const { carts } = useNews();

  console.log('cats', carts);

  return (
    <>
      <Category category={categoryData} categoryActive={0} changeCategory={() => {}} />
      <News news={carts} />
    </>
  );
};

export default NewsContainer;
