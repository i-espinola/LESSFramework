import React from 'react';
import { RowStyle } from './Styled';

export interface RowProps {
  noGutters?: boolean;
  className: string;
  style: object;
  children?:
    | React.ReactChildren
    | React.ReactChildren[]
    | JSX.Element
    | JSX.Element[]
    | string;
}

const DivRow = ({ children, noGutters, className, style }: RowProps) => {
  className = `${className} ${noGutters ? 'no-gutters' : ''}`;
  return (
    <RowStyle style={style} className={className}>
      {children}
    </RowStyle>
  );
};

DivRow.defaultProps = {
  noGutters: false,
  className: '',
  style: {},
};

const Row = React.memo(DivRow);
export default Row;
export { Row };
