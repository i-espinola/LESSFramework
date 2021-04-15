import React, { useState } from 'react';
import ArrowDown from '@svg/chevron-down.svg';
import { DropDownStyle, ListDropDown, DropDownContainer } from './Styled';

export interface DropDownProps {
  overflow?: 'hidden' | 'visible';
  children: React.ReactChildren;
  left?: string;
  top?: string;
  right?: string;
  bottom?: string;
  label: string;
  icon?: JSX.Element;
}

const MenuDropDown = (props) => {
  const [visible, setVisible] = useState(false);
  let { children, left, top, right, bottom, label, overflow } = props;

  const toggleDropDown = () => setVisible(!visible);

  const icon = props.icon || <ArrowDown className="chevron-down" />;

  const buildRender = () => (
    <DropDownStyle>
      <DropDownContainer>
        <button onClick={toggleDropDown} type="button">
          {label}
          {icon}
        </button>
        <ListDropDown
          className={visible ? 'show' : ''}
          theme={{ visible, left, top, right, bottom, overflow }}
        >
          {children}
        </ListDropDown>
      </DropDownContainer>
    </DropDownStyle>
  );

  return buildRender();
};

MenuDropDown.defaultProps = {
  left: 'initial',
  top: '50px',
  right: 'initial',
  bottom: 'initial',
  children: <></>,
  icon: false,
  label: '',
  overflow: 'hidden',
};

export default MenuDropDown;
export { MenuDropDown };
