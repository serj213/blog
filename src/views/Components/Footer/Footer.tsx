import React from 'react';
import Container from '../Container/Container';
import Text from '../../Elements/Text';

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
              }}>
              <p>dfdf</p>
            </Text>
          </div>

          <div className={s.footer__column}></div>

          <div className={s.footer__column}></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
