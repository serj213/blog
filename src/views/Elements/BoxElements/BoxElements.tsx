import React from 'react';
import { classNamesFunc } from '../../../tools/classNamesFunc';
import s from './BoxElements.module.scss';

interface IBoxElements {
  children: React.ReactNode;
  modificators?: IModificators;
  click?:any
}

interface IModificators {
  justifyContent?: IBoxElementsJustifyContent;
  alignItems?: IBoxElementsAlineItems;
  flex?: boolean;
  cursorPointer?:boolean
}

type IBoxElementsJustifyContent = 'left' | 'center' | 'space-between' | 'space-around' | 'right';
type IBoxElementsAlineItems = 'start' | 'center' | 'end';

const BoxElements: React.FC<IBoxElements> = ({ children, modificators,click }) => {
  const boxElementsModifi = {
    leftHorizont: modificators?.justifyContent === 'left',
    centerHorizont: modificators?.justifyContent === 'center',
    spaceBetween: modificators?.justifyContent === 'space-between',
    spaceAround: modificators?.justifyContent === 'space-around',
    rightHorizont: modificators?.justifyContent === 'right',
    startVertical: modificators?.alignItems === 'start',
    centerVertical: modificators?.alignItems === 'center',
    endVertical: modificators?.alignItems === 'end',
    flex: modificators?.flex === true,
    cursorPointer:modificators?.cursorPointer === true
  };

  return <div onClick={click} className={classNamesFunc(boxElementsModifi, s)}>{children}</div>;
};

export default BoxElements;
