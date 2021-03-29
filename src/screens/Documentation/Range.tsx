import React from 'react';
import { Row, Col, Title, Range as Comp } from '@components';

const Range = () => {
  return (
    <>
      <a id="range" />
      <Title title="Range" align="left" />
      <Row>
        <Col>
          <Comp min={1} max={100} value={50} />
        </Col>
        <Col>
          <Comp min={0} max={100} value={50} />
        </Col>
      </Row>
    </>
  );
};

export default Range;
export { Range };
