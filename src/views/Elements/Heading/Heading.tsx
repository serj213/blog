import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import { classNamesFunc } from '../../../tools/classNamesFunc';

import s from './heading.module.scss';

interface IHeadingProps {
  modificators?: IModificators;
}

interface IModificators {
  color?: IHeadingColor;
  fontFamily?: ITeactFontFamily;
  size?: IHeadingSize;
  weight?: THeadingWeight;
  marginBottom?: THeadingMarginBottom;
  uppercase?: boolean;
  position?: THeadingPosition;
}

type IHeadingColor = 'white' | 'grey' | 'blue-dark';
type ITeactFontFamily = 'Noto' | 'play';
type IHeadingSize = 'small' | 'middle' | 'big';
type THeadingWeight = '400' | '700';
type THeadingMarginBottom = '10' | '15' | '20' | '40';
type THeadingPosition = 'left' | 'center' | 'right';

const Heading: React.FC<PropsWithChildren<IHeadingProps>> = (props) => {
  const { children, modificators } = props;

  const HeadingModifications = {
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
    mb20:modificators?.marginBottom === '20',
    mb15: modificators?.marginBottom === '15',
    mb40: modificators?.marginBottom === '40',
    uppercase: modificators?.uppercase,
    left: modificators?.position === 'left',
    center: modificators?.position === 'center',
    right: modificators?.position === 'right',
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement, {
          className: `${s.heading} ${classNamesFunc(HeadingModifications, s)}`,
        });
      })}
    </>
  );
};

export default Heading;
