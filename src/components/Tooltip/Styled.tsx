import Styled from 'styled-components';

const TooltipWrapper = Styled.div`
  display: inline-flex;
  vertical-align: middle;
  position: relative;
  padding-left: 8px;
  cursor: help;
`;

const TooltipTip = Styled.div`
  position: absolute;
  text-align: center;
  padding: 8px 16px;
 
  color: #F2F2F2;
  font-size:12px;
  z-index: 999999;
  transform: translateX(-50%);
  backdrop-filter: blur(8px);
  transition: all .8s linear; 
  width: 324px;
  min-height: 52px;
  bottom: 12px;
  left: 10px;
  background: #333333;
  border-radius: 5px;
 
`;
export { TooltipWrapper, TooltipTip };
