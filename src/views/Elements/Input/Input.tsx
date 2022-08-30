import React from 'react';
import { classNamesFunc } from '../../../tools/classNamesFunc';

import s from './input.module.scss';

interface IInputProps {
  modificators?: IModificators;
  placeholder?: string;
}

interface IModificators {
  width?: TInputWidht;
}

type TInputWidht = 'full' | 'middle' | 'small';

const Input: React.FC<IInputProps> = ({ modificators, placeholder }) => {
  const inputModificators = {
    small: modificators?.width === 'small',
    middle: modificators?.width === 'middle',
    full: modificators?.width === 'full',
  };

  const [value, setValue] = React.useState('');

  const changeInputHandler = (valueChange: string) => {
    setValue(valueChange);
  };

  return (
    <input
      type={'text'}
      className={`${s.input} ${classNamesFunc(inputModificators, s)}`}
      value={value}
      onChange={(e) => changeInputHandler(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;
