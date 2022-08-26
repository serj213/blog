import { ICartsResponse } from '../../types/index';

const cartsMockap: ICartsResponse = {
  carts: [
    {
      id: 'c0',
      img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
      name: 'Статья первая',
      type: 1,
      descript: 'Какое то описание',
      date: '01/02/1995',
    },
  ],
};

export const getCarts = async (timeout: number) => {
  new Promise((res, rej) => {
    setTimeout(() => {
      res(cartsMockap);
    }, timeout);
  });
};
