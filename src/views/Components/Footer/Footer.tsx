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
                marginBottom: '10',
              }}>
              <p>Разработчик</p>
            </Text>

            <Text
              modificators={{
                weight: '400',
                size: 'small',
                color: 'white',
                marginBottom: '10',
              }}>
              <p>Сергей Корнилов</p>
            </Text>

            <Text
              modificators={{
                weight: '400',
                size: 'small',
                color: 'white',
              }}>
              <a href="mailto:deaddemonx.202@gmail.ru">deaddemonx.202@gmail.ru</a>
            </Text>
          </div>

          <div className={s.footer__column}>
            <ul className={s.footer__socials}>
              <li>
                <Text
                  modificators={{
                    weight: '400',
                    size: 'small',
                    color: 'white',
                  }}>
                  <a href="mailto:deaddemonx.202@gmail.ru">Telegram</a>
                </Text>
              </li>
              <li>
                <Text
                  modificators={{
                    weight: '400',
                    size: 'small',
                    color: 'white',
                  }}>
                  <a href="mailto:deaddemonx.202@gmail.ru">Behance</a>
                </Text>
              </li>
              <li>
                <Text
                  modificators={{
                    weight: '400',
                    size: 'small',
                    color: 'white',
                  }}>
                  <a href="mailto:deaddemonx.202@gmail.ru">VKontakte</a>
                </Text>
              </li>
              <li>
                <Text
                  modificators={{
                    weight: '400',
                    size: 'small',
                    color: 'white',
                  }}>
                  <a href="mailto:deaddemonx.202@gmail.ru">WhatsApp</a>
                </Text>
              </li>
            </ul>
          </div>

          <div className={s.footer__column}>
            <Text
              modificators={{
                weight: '400',
                size: 'small',
                color: 'white',
                marginBottom: '10',
              }}>
              <p>Дизайнер</p>
            </Text>

            <Text
              modificators={{
                weight: '400',
                size: 'small',
                color: 'white',
                marginBottom: '10',
              }}>
              <p>Елизавета Фролова</p>
            </Text>

            <Text
              modificators={{
                weight: '400',
                size: 'small',
                color: 'white',
              }}>
              <a href="mailto:deaddemonx.202@gmail.ru">deaddemonx.202@gmail.ru</a>
            </Text>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
