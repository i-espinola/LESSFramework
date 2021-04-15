import React from 'react';
import { TableStyle } from './Styled';

export interface TableProps {
  children:
    | React.ReactChildren
    | React.ReactChildren[]
    | JSX.Element
    | JSX.Element[]
    | string
    | number;
}

const Table = ({ children }: TableProps) => <TableStyle>{children}</TableStyle>;

export default Table;
export { Table };
