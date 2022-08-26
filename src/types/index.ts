export interface ICartItemSmall {
  id: string;
  img: string;
  name: string;
  type: number;
  descript: string;
  date: string;
}

export interface ICartsResponse {
  carts: ICartItemSmall[];
}

export enum ECartStatus {
  PENDING = 'PENDING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface ICartItemDetail {
  id: string;
  img: string;
  articleContent: string;
}

export interface ICartState {
  carts: ICartItemSmall[] | null;
  category: number;
}
