export {};

// // import { ICartItemSmall, ICartsResponse } from '../../types/carts';
// import { IDetailsArticle } from '../../types/postDetail';

// const cartsMockap: ICartItemSmall[] = [
//   {
//     id: 'c0',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья первая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },
//   {
//     id: 'c1',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья вторая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c2',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья третья',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c3',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья четвертая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c4',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья пятая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c5',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья шестая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c6',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья седьмая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c7',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья восьмая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c8',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья девятая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c9',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья десятая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c10',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c11',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c12',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c12',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c13',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c14',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c15',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c16',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c17',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },

//   {
//     id: 'c18',
//     img: 'https://blog.aifsabroad.com/wp-content/uploads/2017/01/aifs-study-abroad-spring-student-blogger.jpg',
//     name: 'Статья одиннацатая',
//     type: 1,
//     descript: 'Какое то описание',
//     date: '01/02/1995',
//   },
// ];

// const postArticle: IDetailsArticle = {
//   author: 'Корнилов Сергей',
//   title: 'Начало карьеры react-разработчика',
//   datePublication: '25.11.2022',
//   views: 233,
//   imgMain:
//     'https://placepic.ru/wp-content/uploads/2021/01/FF3mH8WjNnC2WlfFnSX34PFQycxOoEx0ViBmDS867A1Qs4DKSXt3TF2MYn0vLX7GiqgYZDBv9IU7JAx6FA3wqAAb7QWJ9yUh8QwVhux99aPsSJ7HTqAEaFt0IRIuOqsSG7CN9hQ.jpg',
//   tags: [
//     {
//       id: 't0',
//       text: 'разработка',
//     },
//     {
//       id: 't1',
//       text: 'react',
//     },
//   ],
//   category: 1,
//   markdown: `Несмотря на то что пост написан в этом году, изучить всю предложенную программу за оставшиеся месяцы вы, вероятно, не успеете. Поэтому карту разработчика можно смело брать с собой в год следующий.  \n Адам Голаб, эксперт по React и JS, составил пошаговый учебный план, который поможет вам стать разработчиком с нуля либо укажет направление для дальнейшего повышения навыков в профессии.\nПлан Адама представляет собой список основных пунктов, которые вам нужно изучить самостоятельно. Мы добавили описание, а в некоторых сложных моментах указали ссылки на дополнительные справочные материалы, с помощью которых вы получите ответ на вопрос: «Что я должен узнать как React-разработчик?».\n План Адама представляет собой список основных пунктов, которые вам нужно изучить самостоятельно. Мы добавили описание, а в некоторых сложных моментах указали ссылки на дополнительные справочные материалы, с помощью которых вы получите ответ на вопрос: «Что я должен узнать как React-разработчик?». \n ![](https://miro.medium.com/max/1400/1*Az-gnX8CWEv3pBlwlw1sfg.png) \n **1. Основы**\n * HTML \n -Изучите основы HTML`,
// };

// export const getCartsRequest = async (timeout: number) =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(cartsMockap);
//     }, timeout);
//   });

// export const postDetailRequest = async (timeout: number) =>
//   new Promise((res, rej) => {
//     setTimeout(() => {
//       res(postArticle);
//     }, timeout);
//   });
