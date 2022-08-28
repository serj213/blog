import React from 'react';
import Container from '../Container/Container';
import Text from '../../Elements/Text/Text';

import s from './footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footer__inner}>
          <div className={s.footer__column}>
            <Text
              modificators={{
                weight: '400',
                size: 'small',
                color: 'white',
              }}>
              <p>автор</p>
            </Text>

            <Text
              modificators={{
                weight: '400',
                size: 'big',
                color: 'blue-dark',
              }}>
              <p>Сергей КОрнилов</p>
            </Text>
          </div>

          <div className={s.footer__column}>
            <Text
              modificators={{
                weight: '700',
                size: 'middle',
              }}>
              <p>dfdf</p>
            </Text>
          </div>

          <div className={s.footer__column}></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
