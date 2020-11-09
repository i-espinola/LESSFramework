import React from 'react';
import { TitleStyle } from './Styled';

export interface TitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
}

const Title = (props: TitleProps) => {
  const { title, subtitle, align } = props;

  return (
    <TitleStyle theme={{ align }}>
      <h3>{title}</h3>
      {subtitle ? <span>{subtitle}</span> : false}
    </TitleStyle>
  );
};

export default Title;
export { Title };
