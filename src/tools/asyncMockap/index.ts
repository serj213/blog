import { ICartItemSmall, ICartsResponse } from '../../types/index';

const cartsMockap: ICartItemSmall[] = [
  {
    id: 'c0',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья первая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },
  {
    id: 'c1',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья вторая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c2',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья третья',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c3',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья четвертая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c4',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья пятая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c5',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья шестая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c6',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья седьмая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c7',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья восьмая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c8',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья девятая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c9',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья десятая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c10',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c11',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c12',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c12',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c13',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c14',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c15',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c16',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c17',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },

  {
    id: 'c18',
    img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
    name: 'Статья одиннацатая',
    type: 1,
    descript: 'Какое то описание',
    date: '01/02/1995',
  },
];

export const getCartsRequest = async (timeout: number) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      res(cartsMockap);
    }, timeout);
  });
