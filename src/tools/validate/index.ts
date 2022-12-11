export const validateName = (value: string) => {
  return value.length > 1 ? true : 'Имя должно содержать больше 1 символа';
};

export const validatePassword = (value: string) => {
  return value.length > 4 ? true : 'Паспорт должен содержать больше 4 символов';
};

export const validateEmail = (value: string) => {
  if (value.length === 0) {
    return true;
  }
  const regesp = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return regesp.test(value) ? true : 'Введите корректную почту';
};
