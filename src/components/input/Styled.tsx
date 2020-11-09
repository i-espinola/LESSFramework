import Styled from 'styled-components';
import { system } from '../../@theme';

const CheckboxStyle = Styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked {
      + span {
        background-color: #19C96F;

        :before {
          transform: translateX(14px);
          border-color: #19C96F;
        }
      }
    }
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 22px;
    background-color: rgba(120, 120, 128, 0.32);
    -webkit-transition: .4s;
    transition: .4s;

    &:before {
      position: absolute;
      content: "";
      height: 22px;
      width: 22px;
      left: 0px;
      top: -1px;
      background: #FFFFFF;
      border: 1px solid rgba(120, 120, 128, 0.32);
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15), 0px 3px 1px rgba(0, 0, 0, 0.06);
      transition: .4s;
      border-radius: 50%;
    }
  }
`;

export default CheckboxStyle;
export { CheckboxStyle };
