import React from 'react';

import Container from '../../../../Components/Container/Container';
import Heading from '../../../../Elements/Heading/Heading';
import Input from '../../../../Elements/Input/Input';

import s from './Search.module.scss';

import bannerImg from '../../../../../assets/images/banner-search.png';

const Search: React.FC = () => {
  return (
    <div className={s.search}>
      <Container>
        <div className={s.search__box}>
          <img className={s.search__banner} src={bannerImg} alt="" />
          <Heading
            modificators={{
              size: 'middle',
              color: 'white',
              position: 'center',
              marginBottom: '40',
            }}>
            <h1>Ищите определенную статью?</h1>
          </Heading>

          <div className={s.search__inputBox}>
            <Input
              modificators={{
                width: 'middle',
              }}
              placeholder="Как я стал разработчиком?"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Search;
