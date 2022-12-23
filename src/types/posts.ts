export interface IPostDetail {
  id: number;
  title: string;
  content: string;
  img: string;
  category: TPostCategory;
  userId: number;
  createdAt: string;
}

export type TPostCategory = 'general' | 'career' | 'health' | 'life' | 'hobbi';
