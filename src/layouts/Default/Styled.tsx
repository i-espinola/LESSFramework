import Styled from 'styled-components';
import { tokens } from '@theme';

const LayoutStyle = Styled.div`
  min-height: 100vh;
  position: relative;

  > main {
    position: relative;
    padding-top: 3rem;
  }
`;

export default LayoutStyle;
export { LayoutStyle };
