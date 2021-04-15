import Styled from 'styled-components';

const PaginationStyle = Styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;

  > button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;
    padding: 10px 8px;
    letter-spacing: .2rem;
    display: flex;

    &.number {
      padding: 10px 15px;
    }
    &.active {
      font-weight: bold;
      background: ${({ theme }) => theme.color.primary};
      border-radius: 5px;
      color: white;
      padding: 5px 10px;
      letter-spacing: inherit;
      margin: 0 5px;
    }
    &:disabled {
      opacity: .7;
      cursor: no-drop;
      transition: all .3s ease-out;
    }
  }
`;

export default PaginationStyle;
export { PaginationStyle };
