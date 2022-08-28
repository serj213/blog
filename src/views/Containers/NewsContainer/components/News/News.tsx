import React from 'react';
import Container from '../../../../Components/Container/Container';

import s from './news.module.scss';
import NewsBig from './NewsBig/NewsBig';
import { ICartItemSmall } from '../../../../../types';

import NewsSmall from './NewsSmall/NewsSmall';

interface INewsProps {
  news: ICartItemSmall[] | null;
}

const News: React.FC<INewsProps> = ({ news }) => {
  return (
    <div className={s.news}>
      <Container>
        <div className={s.news__box}>
          {news &&
            news.map((item, index) => {
              return index % 4 === 0 ? (
                <>
                  <NewsBig
                    id={item.id}
                    img={item.img}
                    name={item.name}
                    type={item.type}
                    descript={item.descript}
                    date={item.date}
                  />
                </>
              ) : (
                <>
                  <NewsSmall />
                </>
              );
            })}
        </div>
      </Container>
    </div>
  );
};

export default News;
