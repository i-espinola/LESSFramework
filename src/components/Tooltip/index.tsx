import React, { useState } from 'react';
import { TooltipWrapper, TooltipTip } from './Styled';

const Tooltip = (props) => {
  let timeout;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
      {props.children}
      {active && <TooltipTip>{props.content}</TooltipTip>}
    </TooltipWrapper>
  );
};

export { Tooltip };
