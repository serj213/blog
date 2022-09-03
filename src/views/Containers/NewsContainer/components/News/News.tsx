import React from 'react';
import Container from '../../../../Components/Container/Container';

import s from './news.module.scss';
import NewsBig from './NewsBig/NewsBig';
import { ICartItemSmall } from '../../../../../types/carts';

import NewsSmall from './NewsSmall/NewsSmall';

interface INewsProps {
  news: ICartItemSmall[] | null;
  openDetails: any
}

const News: React.FC<INewsProps> = ({ news, openDetails }) => {
  return (
    <div className={s.news}>
      <Container>
        <div className={s.news__box}>
          {news &&
            news.map((item, index) => {
              return index % 4 === 0 ? (
                <>
                  <NewsBig key={item.id} {...item} index={index} revers={index % 8 === 0} openDetails={() => openDetails(item.id)} />
                </>
              ) : (
                <>
                  <NewsSmall key={item.id} {...item} />
                </>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default News;
