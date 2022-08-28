import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { classNamesFunc } from '../../../tools/classNamesFunc';

import s from './text.module.scss';

console.log('class ', s.text);

interface ITextProps {
  modificators?: IModificators;
}

interface IModificators {
  color?: ITextColor;
  fontFamily?: ITeactFontFamily;
  size?: ITextSize;
  weight?: TTextWeight;
  marginBottom?: TTextMarginBottom;
}

type ITextColor = 'white' | 'grey' | 'blue-dark';
type ITeactFontFamily = 'Noto' | 'play';
type ITextSize = 'small' | 'middle' | 'big';
type TTextWeight = '400' | '700';
type TTextMarginBottom = '10' | '15' | '40';

const Text: React.FC<PropsWithChildren<ITextProps>> = (props) => {
  const { children, modificators } = props;

  const textModifications = {
    normal: modificators?.weight === '400',
    bold: modificators?.weight === '700',
    small: modificators?.size === 'small',
    middle: modificators?.size === 'middle',
    big: modificators?.size === 'big',
    white: modificators?.color === 'white',
    blueDark: modificators?.color === 'blue-dark',
    grey: modificators?.color === 'grey',
    noto: modificators?.fontFamily === 'Noto',
    play: modificators?.fontFamily === 'play',
    mb10: modificators?.marginBottom === '10',
    mb15: modificators?.marginBottom === '15',
    mb40: modificators?.marginBottom === '40',
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement, {
          className: classNamesFunc(textModifications, s),
        });
      })}
    </>
  );
};

export default Text;
