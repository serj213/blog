import React from 'react';
import Text from '../../../../../Elements/Text/Text';
import Heading from '../../../../../Elements/Heading/Heading';
import { ICartItemSmall } from '../../../../../../types';

// import img from '../../../../../../assets/images/newsItem/01.png';

import s from './newsBig.module.scss';

interface INewsBigProps extends ICartItemSmall {
  revers?: boolean;
}

const NewsBig: React.FC<INewsBigProps> = ({ revers = false, img, name, descript, date }) => {
  return (
    <div className={`${s.newsBig} ${s.newsBig__reverse}`}>
      <div className={s.newsBig__image}>
        <img src={img} alt="" />
      </div>
      <div className={s.newsBig__content}>
        <Text
          modificators={{
            size: 'middle',
            fontFamily: 'play',
            color: 'grey',
            weight: '400',
            marginBottom: '15',
          }}>
          <p>Карьера</p>
        </Text>

        <Heading
          modificators={{
            size: 'big',
            color: 'blue-dark',
            weight: '700',
            marginBottom: '15',
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
            size: 'middle',
            fontFamily: 'play',
            color: 'grey',
            weight: '400',
          }}>
          <p>{date}</p>
        </Text>
      </div>
    </div>
  );
};

export default NewsBig;
