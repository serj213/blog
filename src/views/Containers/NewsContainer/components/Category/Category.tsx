import React from 'react';
import Container from '../../../../Components/Container/Container';

import s from './category.module.scss';

interface ICategoryProps {
  category: ICategoryItem[];
  categoryActive: number;
  changeCategory: any;
}

interface ICategoryItem {
  id: number;
  text: string;
}

const Category: React.FC<ICategoryProps> = ({ category, categoryActive, changeCategory }) => {
  return (
    <div className={s.category}>
      <Container>
        <div className={s.category__inner}>
          <ul className={s.category__list}>
            {category.map((item) => {
              return (
                <li
                  className={`${s.category__item} ${item.id === categoryActive && s.active}`}
                  key={item.id}>
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Category;
