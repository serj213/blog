import React from 'react';
import { TPostCategory } from '../../../../../types/posts';

import Text from '../../../../Elements/Text/Text';
import { translateDate } from '../../../../../tools/translateDate/translateDate';

import s from './PublishedArticlesItem.module.scss';

interface IPublishedArticlesItemProps {
  category: TPostCategory;
  title: string;
  date: string;
}

const PublishedArticlesItem: React.FC<IPublishedArticlesItemProps> = ({ category, title, date }) => {
  return (
    <div className={s.itemArticle}>
      <Text
        modificators={{
          size: 'ultra-small',
          color: 'grey',
          marginBottom: '15',
        }}
      >
        <p>Карьера</p>
      </Text>

      <Text
        modificators={{
          size: 'small',
          weight: '700',
          color: 'blue-dark',
          marginBottom: '15',
        }}
      >
        <p>{title}</p>
      </Text>

      <Text
        modificators={{
          size: 'ultra-small',
          color: 'grey',
        }}
      >
        <p>{translateDate(date).replaceAll('.', '/')}</p>
      </Text>
    </div>
  );
};

export default PublishedArticlesItem;
