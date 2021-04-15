import Styled from 'styled-components';

const TableStyle = Styled.table`
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  height: auto;

  > thead {

    > tr {

      > th {
        padding: 15px 0rem;
        padding-top: 10px;
        border-bottom: 1px solid #e5e5e5;
        line-height: 10px;
        color: #A3A3A3;
        font-weight: normal;
        font-size: .9rem;

        &:first-child {
          padding-left: 15px;
        }

        &:last-child {
          padding-right: 15px;
        }

      }
    }
  }

  > tbody {

    > tr {

      > td {
        padding: 15px 0rem;
        border-top: 1px solid #e5e5e5;
        font-size: .9rem;
        color: #626262;
        text-transform: capitalize;

        &:first-child {
          padding-left: 15px;
        }
        &:last-child {
          padding-right: 15px;
        }
      }

      &:first-child {
        > td {
          border-top: none;
        }
      }
      &:last-child {
        > td {
          padding-bottom: 0;
        }
      }
    }
  }

  > tfoot {
    padding-bottom: 10px;

    > tr {

      > td {
        padding: 5px 0rem;
      }
    }
  }
`;

export default TableStyle;
export { TableStyle };
