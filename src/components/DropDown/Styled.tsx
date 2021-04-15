import Styled from 'styled-components';

const DropDownStyle = Styled.div`
  display: flex;
  justify-content: initial;
  align-items: center;
  transition: all .3s ease 0s;

  /* &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: transparent;
    display: ({ visible }) => (visible ? 'none' : 'block');
    opacity: ({ visible }) => (visible ? '0' : '1');
    z-index: 0;
  } */
`;

const DropDownContainer = Styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  > button {
    font-family: 'Avenir';
    font-style: normal;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    min-width: 200px;
    font-size: .9rem;
    line-height: 1rem;
    border-style: solid;
    border-width: 1px;
    padding: .5rem 15px;
    cursor: pointer;
    outline: none;
    border-radius: 7px;
    color: #231F20;
    background: transparent;
    border-color: #E0E0E0;
    transition: all .6s ease 0s;
    z-index: 1;

    &:hover {
    color: #ffffff;
    background: ${({ theme }) => theme.color.primary};
    border-color:${({ theme }) => theme.color.primary};
    }
    
    &:disabled {
      opacity: .6;
    }

    &.text {
      border: none;
      font-weight: normal;
      background: none;
      line-height: 12px;
      font-size: 12px;
      min-width: initial;
      padding: 0;

      &.user-menu {

        &:hover {
          color: #000000;
          background: transparent;
          border-color: none;
        }
      }
    }

    & svg {
      height: 100%;
      width: auto;
      margin: 0;
      transition: all .5s ease 0s;

      &.chevron-down {
        transform: rotate(360deg);
        transform-origin: 50% 50%;
      }

      &.chevron-right{
        transform: rotate(270deg);
        transform-origin: 50% 50%;
      }
    }
  }
`;

const ListDropDown = Styled.div`
  box-shadow:  0px 2px 5px 2px #efefef;
  background-color: #FFF;
  backdrop-filter: blur(10px);
  border: 1px solid #E5E5E5;
  border-radius: 7px;
  position: absolute;
  left: ${({ theme }) => theme.left};
  top: ${({ theme }) => theme.top};
  right: ${({ theme }) => theme.right};
  bottom: ${({ theme }) => theme.bottom};
  z-index: 100;
  height: auto;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  width: fill-available;
  padding: 15px;
  transition: all .3s ease-in-out;
  overflow: ${({ theme }) => theme.overflow};
  overflow-y: inherit;
  border-radius: 7px;
  z-index: 100;
  
  &.show{
    opacity: 1;
    visibility: visible;
    max-height: 300px;
  }

  & span {
    color: #626262;
    display: block;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f1f1f1;
  }

  & ul,
  & ol {
    display: block;
    height: auto;
    width: 100%;
    margin: 0;

    > li {
      cursor: pointer;
      display: flex;
      min-width: 150px;
      justify-content: space-between;
      align-items: center;
      line-height: 25px;
      color: #626262;
      font-size: 14px;
      margin: 0 -15px;
      padding: 5px 15px;
      white-space: nowrap;
      overflow: ${({ theme }) => theme.overflow};
      text-overflow: ellipsis;

      &:hover {
        background-color: rgb(226 226 226 / 0.5);
        color: #000000;
      }

      & p,
      & a,
      & span {
        color: #626262;
        font-size: 14px;
      }
    }
  }

  &.user-menu {
    max-height: initial;
    overflow: visible;
    overflow-y: initial;
    min-width: 250px;

    & ul,
    & ol {

      > li {
        &:first-of-type {
          border-bottom: 1px solid #f7f7f7;
        }
        &:last-of-type {
        }
      }
    }

    &:hover {
      & svg {
        stroke: #000000;

        > path,
        > rect {
            stroke: #000000;
        }
      }
    }

    &:before{
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: -11px;
      right: 41px;
      border-left: 9px solid transparent;
      border-right: 9px solid transparent;
      border-bottom: 11px solid #EBEBEB;
    }

    &:after{
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: -10px;
      right: 42px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 10px solid #fff;
    }
  }
`;

export default DropDownStyle;
export { DropDownStyle, DropDownContainer, ListDropDown };
