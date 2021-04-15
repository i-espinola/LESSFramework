import React from 'react';
import HeadNext from 'next/head';

export interface HeadProps {
  title: string;
  children?:
    | React.ReactChildren
    | React.ReactChildren[]
    | JSX.Element
    | JSX.Element[]
    | string;
}

const Head = ({ children, title }: HeadProps) => {
  return (
    <HeadNext>
      <title>{title}</title>
      {children}
    </HeadNext>
  );
};

Head.defaultProps = {
  children: <></>,
};

export default Head;
export { Head };
