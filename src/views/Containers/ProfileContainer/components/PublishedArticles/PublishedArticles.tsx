import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

import { IPostDetail } from '../../../../../types/posts';

import Text from '../../../../Elements/Text/Text';
import PublishedArticlesItem from '../PublishedArticlesItem/PublishedArticlesItem';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import s from './PublishedArticles.module.scss';

interface IPublishedArticlesProps {
  myPosts: IPostDetail[] | null;
}

const PublishedArticles: React.FC<IPublishedArticlesProps> = ({ myPosts }) => {
  const prevArrow = useRef(null);
  const nextArrow = useRef(null);

  useEffect(() => {}, []);

  return (
    <div className={s.publishedArticles}>
      <Text
        modificators={{
          weight: '700',
          size: 'small',
          color: 'blue-dark',
          marginBottom: '30',
        }}
      >
        <p>Опубликованные статьи</p>
      </Text>

      {myPosts !== null ? (
        <div className={s.publishedArticles__sliderBox}>
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            speed={700}
            pagination={{
              type: 'fraction',
            }}
            navigation={{
              prevEl: prevArrow.current,
              nextEl: nextArrow.current,
              disabledClass: s.disabled,
            }}
            modules={[Pagination, Navigation]}
            className={s.slider}
          >
            {myPosts.map(({ id, category, title, createdAt }) => {
              return (
                <SwiperSlide key={id}>
                  <PublishedArticlesItem category={category} title={title} date={createdAt} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <div ref={prevArrow} className={s.arrow_prev}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.5L0.75 0.00480938V12.9952L12 6.5Z" />
            </svg>
          </div>

          <div ref={nextArrow} className={s.arrow_next}>
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.5L0.75 0.00480938V12.9952L12 6.5Z" />
            </svg>
          </div>
        </div>
      ) : (
        <div className={s.publishedArticles__inner}>
          <Text
            modificators={{
              size: 'small',
              color: 'grey',
              positions:'center'
            }}
          >
            <p>У вас опубликованных статей :(</p>
          </Text>
        </div>
      )}
    </div>
  );
};

export default PublishedArticles;
