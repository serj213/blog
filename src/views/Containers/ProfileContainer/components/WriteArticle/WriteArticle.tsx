import React from 'react';
import Button from '../../../../Elements/Button/Button';

import Text from '../../../../Elements/Text/Text';

import s from './WriteArticle.module.scss';

const WriteArticle: React.FC = () => {
  return (
    <div className={s.writeArticle}>
      <div>
        <Text
          modificators={{
            weight: '700',
            size: 'small',
            color: 'blue-dark',
            marginBottom: '15',
          }}
        >
          <p>У вас есть, что нам рассказать?</p>
        </Text>
      </div>
      <div>
        <Text
          modificators={{
            size: 'small',
            color: 'blue-dark',
            marginBottom:'15'
          }}
        >
          <p>
            Напишите об этом статью прямо сейчас! Не стоит стесняться, здесь все свои :)
          </p>
        </Text>
      </div>

      <Button>Написать статью</Button>
    </div>
  );
};

export default WriteArticle;
