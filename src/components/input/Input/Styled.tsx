import Styled, { css } from 'styled-components';

const buttonField = css`
  > button {
    transition: all 0.2s ease-in-out 0s;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      width: 24px;
      height: 24px;

      > path,
      > rect {
        fill: #ababab;
      }
    }
  }
`;

const FieldBox = Styled.label`
  background: #F5F5F5;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 12px;
  margin: 10px 0;
  padding: 7px 20px;
  display: block;
  height: auto;
  transition: all 0.2s ease-in-out 0s;

  > label {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    display: flex;
    text-align: left;
    color: #626262;
  }

  > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;

    > button {
      background: transparent;
      transition: all 0.2s ease-in-out 0s;
      border: none;
      outline: none;
    }

    > input {
      background: transparent;
      border: none;
      outline: none;
      font-size: 18px;
      transition: all 0.2s ease-in-out 0s;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 34px;
      display: flex;
      color: #000000;
      flex: auto;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &:-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &::-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.6);
      }
    }

    ${buttonField}
  }

  &:focus-within {
    background: transparent;
    border-color: #19C96F;
  }
`;

const FieldDefault = Styled.div`
  display: block;
  height: auto;
  text-align: left;
  transition: all 0.2s ease-in-out 0s;
    
  > label {
    font-family: 'Nunito';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 19px;
    display: block;
    color: #000;
    margin-top:10px;
    padding-left: 15px;
  }

  > div {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    background: ${({ disabled }) => (disabled ? '#F5F5F5' : 'transparent')};
    border: 1px solid #E5E5E5;
    box-sizing: border-box;
    height: 48px;
    padding-right: 30px;
    border-radius: 12px;
    margin: 5px 0 10px;
    padding: 0 15px;
    transition: all 0.2s ease-in-out 0s;

    > input {
      background: transparent;
      outline: none;
      border: none;
      transition: all 0.2s ease-in-out 0s;
      font-family: 'Nunito';
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
      color: #000000;
      height: 100%;
      width: 100%;

      &::placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &:-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &::-ms-input-placeholder {
        color: rgba(0, 0, 0, 0.6);
      }

      &:focus {
        border-color: #19C96F;
      }

      &:disabled {
        background: #F5F5F5;
      }
    }

    &:focus-within {
      background: transparent;
      border-color: #19C96F;
    }

    ${buttonField}
  }
`;

export default FieldDefault;
export { FieldBox, FieldDefault, FieldInvalid };
