import React from 'react';
import MarginStyle from './Styled';

export interface ContainerProps {
  left?: number;
  top?: number;
  right?: number;
  bottom?: number;
}

const Margin = ({ left, top, right, bottom }: ContainerProps) => (
  <MarginStyle theme={{ left, top, right, bottom }} />
);

Margin.defaultProps = {
  left: 1,
  top: 1,
  right: 1,
  bottom: 1,
};

export default Margin;
export { Margin };
