export interface ICartItemSmall {
  id: string;
  img: string;
  name: string;
  type: string;
  descript: string;
  date: string;
}

export interface ICartItemDetail {
  id: string;
  img: string;
  articleContent: string;
}

export interface ICartState {
  carts: ICartItemDetail[] | null;
  category: number;
}
