export const translateDate = (date: string) => {
  return new Date(date).toLocaleDateString('ru-RU', { timeZone: 'Europe/Moscow' });
};
