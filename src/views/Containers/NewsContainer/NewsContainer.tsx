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

  React.useEffect(() => {
    dispatch(cartActions.getCart());
  }, []);

  const { carts } = useNews();

  return (
    <div className={s.box}>
      <Category category={categoryData} categoryActive={0} changeCategory={() => {}} />
      <News news={carts} />

      <Button seeMore>Посмотреть ещё статьи</Button>
    </div>
  );
};

export default NewsContainer;
