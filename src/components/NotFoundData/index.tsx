import React from 'react';

// Style
import { Margin } from '@components';

// Style
import { NotFoundDataStyle, Title } from './Styled';

// COMPONENT ICON
import NotFoundDataIcon from '@svg/empty.svg';

const NotFoundData = () => (
  // <NotFoundDataStyle>
  //   <div>
  //     <NotFoundDataIcon/>
  //     <span>Nada encontrado</span>
  //   </div>
  // </NotFoundDataStyle>
  <>
    <Margin />
    <Title>Nenhum resultado encontrado.</Title>
  </>
);

export default NotFoundData;
export { NotFoundData };
