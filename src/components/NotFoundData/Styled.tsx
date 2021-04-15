import Styled from 'styled-components';

const NotFoundDataStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    margin: 2rem;

    > svg {
      width: 100px;
      height: 100px;
      margin: 0 auto;
      display: block;
      fill: #7d7d7d;
    }
  
    > span {
      font-size: 2rem;
      display: block;
      margin: 0;
    }
  }
`;

const Title = Styled.p`
  font-size: 18px;
  color: #000;
`;

export default NotFoundDataStyle;
export { NotFoundDataStyle, Title };
