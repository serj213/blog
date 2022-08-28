import { categoryData } from './categoryData';

export const convertTypesName = (id: number) => {
  return categoryData.find((item) => item.id === id)?.text;
};
