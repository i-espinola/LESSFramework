import Styled from 'styled-components';

const EmptyDataStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

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
      text-align: center;
    }

    > p {
      font-size: 1rem;
      display: block;
      margin: 0;
    }
  }

`;

export default EmptyDataStyle;
export { EmptyDataStyle };
