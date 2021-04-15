import Styled from 'styled-components';
import { tokens } from '@theme';

const ProgressBarStyle = Styled.div`
  width: 100%;

  > div {
    position: relative;
    background: #ececec;
    border-radius: 14px;
    border-radius: 5px;
    height: ${({ theme }) => theme.height};

    > div {
      position: absolute:
      left: 0;
      top: 0;
      bottom: 0;
      height: inherit;
      border-radius: inherit;
      background: ${tokens.color.primary};
      width: ${({ theme }) => theme.progress}%;
    }
  }
`;

export default ProgressBarStyle;
export { ProgressBarStyle };
