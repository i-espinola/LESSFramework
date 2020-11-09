import React from 'react';
import { BoxStyled } from './Styled';

export interface BoxChild {
  children?: JSX.Element;
  style?: object;
}

const Box = (props: BoxChild) => (
  <BoxStyled style={props.style}>{props.children}</BoxStyled>
);

Box.defaultProps = {
  style: {},
};

export default Box;
export { Box };
