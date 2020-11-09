import React, { forwardRef, memo } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FooterStyle } from './Styled';
import { CopyRight, Brand } from '@components';

const PageFooter = forwardRef((props, ref: any) => {
  const emailCompany = (
    <Col md={12} lg={12} xl={12}>
      <>
        <h6>Fale com a gente</h6>
        <span>Email: </span>
        <a className="link-text" href="mailto:contato@LESSFramework">
          contato@LESSFramework
        </a>
      </>
    </Col>
  );

  return (
    <div ref={ref}>
      <FooterStyle ref={ref}>
        <Container>
          <Row>
            <Brand size={18} />
          </Row>
          <br />
          <Row>
            <Col sm={4}>{emailCompany}</Col>
            <Col sm={4}>{emailCompany}</Col>
            <Col sm={4}>{emailCompany}</Col>
          </Row>
        </Container>
        <CopyRight />
      </FooterStyle>
    </div>
  );
});

const Footer = memo(PageFooter);

export default Footer;
export { Footer };
