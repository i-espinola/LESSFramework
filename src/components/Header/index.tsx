import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Brand, NavBar } from '@components';
import { HeaderStyled, HeaderItens } from './Styled';

export interface HeaderProps {
  autoHidden?: boolean;
}

const Header = React.forwardRef((props: HeaderProps, ref: any) => {
  const [visible, setVisible] = useState(true);
  let lastScroll = 0;

  const handleScroll = useCallback(() => {
    const currentPositionY = window.pageYOffset;
    const visible = lastScroll > currentPositionY;
    setVisible(visible);
    lastScroll = currentPositionY;
  }, []);

  useEffect(() => {
    if (props.autoHidden) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div ref={ref}>
      <HeaderStyled className={visible ? '' : 'auto-hidden'} ref={ref}>
        <Container>
          <HeaderItens>
            <Brand size={16} />
            <NavBar />
          </HeaderItens>
        </Container>
      </HeaderStyled>
    </div>
  );
});

export default Header;
export { Header };
