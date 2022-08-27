import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

interface ITextProps {
  modificators?: IModificators;
}

interface IModificators {
  color?: ITextColor;
  fontFamily?: ITeactFontFamily;
  size?: ITextSize;
  weight?: TTextWeight;
}

type ITextColor = 'white' | 'text' | 'blue-dark';
type ITeactFontFamily = 'Noto' | 'play';
type ITextSize = 'small' | 'middle' | 'big';
type TTextWeight = '400' | '700';

const Text: React.FC<PropsWithChildren<ITextProps>> = (props) => {
  const { children, modificators } = props;

  const textModifications = {
    400: modificators?.weight === '400',
  };

  return (
    <>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as ReactElement, {
          className: `text__${textModifications}`,
        });
      })}
    </>
  );
};

export default Text;
