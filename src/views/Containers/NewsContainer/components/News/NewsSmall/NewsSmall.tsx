import React from 'react';

import Text from '../../../../../Elements/Text/Text';
import Heading from '../../../../../Elements/Heading/Heading';
import { convertTypesName } from '../../../../../../tools/convertTypesName';

import s from './newsSmall.module.scss';

import { ICartItemSmall } from '../../../../../../types';

const NewsSmall: React.FC<ICartItemSmall> = ({ img, name, type, descript, date }) => {
  return (
    <div className={s.newsSmall}>
      <div className={s.newsSmall__img}>
        <img src={img} alt="" />
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
          <p>{convertTypesName(type)}</p>
        </Text>
        <Heading
          modificators={{
            size: 'small',
            color: 'blue-dark',
            weight: '700',
            marginBottom: '15',
            uppercase: true,
          }}>
          <h3>{name}</h3>
        </Heading>
        <Text
          modificators={{
            size: 'small',
            fontFamily: 'Noto',
            color: 'grey',
            weight: '400',
            marginBottom: '15',
          }}>
          <p>{descript}</p>
        </Text>
        <Text
          modificators={{
            size: 'small',
            fontFamily: 'play',
            color: 'grey',
            weight: '400',
            marginBottom: '15',
          }}>
          <p>{date}</p>
        </Text>
      </div>
    </div>
  );
};

export default NewsSmall;
