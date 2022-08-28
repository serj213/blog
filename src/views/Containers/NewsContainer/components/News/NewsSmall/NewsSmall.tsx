import React from 'react';

import Text from '../../../../../Elements/Text/Text';
import Heading from '../../../../../Elements/Heading/Heading';

import s from './newsSmall.module.scss';

import img from '../../../../../../assets/images/newsItem/01.png';

const NewsSmall: React.FC = () => {
  return (
    <div className={s.newsSmall}>
      <div className={s.newsSmall__img}>
        <img src={'/images/01.png'} alt="" />
      </div>
      <div className={s.newsSmall__content}>
        <Text
          modificators={{
            size: 'small',
            fontFamily: 'play',
            color: 'grey',
            weight: '400',
            marginBottom: '15',
          }}>
          <p>Карьера</p>
        </Text>
        <Heading
          modificators={{
            size: 'small',
            color: 'blue-dark',
            weight: '700',
            marginBottom: '15',
            uppercase: true,
          }}>
          <h3>начало карьеры react-разработчика</h3>
        </Heading>
        <Text
          modificators={{
            size: 'small',
            fontFamily: 'Noto',
            color: 'grey',
            weight: '400',
            marginBottom: '15',
          }}>
          <p>
            Адам Голаб, эксперт по React и JS, составил пошаговый учебный план, который поможет вам
            стать разработчиком с нуля либо...
          </p>
        </Text>
        <Text
          modificators={{
            size: 'small',
            fontFamily: 'play',
            color: 'grey',
            weight: '400',
            marginBottom: '15',
          }}>
          <p>25/11/2021</p>
        </Text>
      </div>
    </div>
  );
};

export default NewsSmall;
