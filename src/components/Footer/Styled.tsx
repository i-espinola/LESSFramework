import styled from 'styled-components';
import { tokens } from '@theme';

const FooterStyle = styled.footer`
  border-top: ${tokens.border.light};
  padding: 15px;
  padding-bottom: 0;

  > div {
    padding: 15px;
  }
`;

export default FooterStyle;
export { FooterStyle };
