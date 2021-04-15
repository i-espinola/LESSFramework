import React from 'react';

// Style
import EmptyDataStyle from './Styled';

// COMPONENT ICON
import EmptyIcon from '@svg/empty.svg';

const EmptyData = () => (
  <EmptyDataStyle>
    <div>
      <EmptyIcon />
      <span>Ops!</span>
      <p>Ainda não temos dados suficientes para exibir.</p>
    </div>
  </EmptyDataStyle>
);

export default EmptyData;
export { EmptyData };
