import React from 'react';
import { TypographyStyle } from './Styled';

export interface TypographyProps {
  children: React.ReactNode;
  align?: 'left' | 'center' | 'justify' | 'right';
  size?: number;
  color?: string;
}

const Typography = (props: TypographyProps) => {
  const { children, align, size, color } = props;

  return (
    <TypographyStyle theme={{ align, size, color }}>{children}</TypographyStyle>
  );
};

Typography.defaultProps = {
  align: 'left',
};

export default Typography;
export { Typography };
