import React from 'react';
import Category from './components/Category/Category';
import News from './components/News/News';
import { useNews } from '../../../tools/hooks/useNews';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../redux/carts/actions';
import { categoryData } from '../../../tools/categoryData';
import Button from '../../Elements/Button/Button';

import s from './NewsContainer.module.scss';

const NewsContainer: React.FC = () => {
  const dispatch = useDispatch();
  const { carts, category } = useNews();

  React.useEffect(() => {
    dispatch(cartActions.getCart());
  }, []);



  const changeCategory = (category: number) => {
    dispatch(cartActions.changeCategory(category));
  };

  return (
    <div className={s.box}>
      <Category category={categoryData} categoryActive={category} changeCategory={changeCategory} />
      <News news={carts} />

      <Button seeMore>Посмотреть ещё статьи</Button>
    </div>
  );
};

export default NewsContainer;
