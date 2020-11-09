import React, { useState } from 'react';
import { NavBarStyle } from './Styled';

export interface MenuList {
  href: string;
  label: string;
}
export interface NavBarprops {
  menuList: MenuList[];
}

const NavBar = (props: NavBarprops) => {
  const [active, setActive] = useState('');

  const handleClick = (e) => {
    const selectAnchor = e?.target?.parentNode?.attributes?.href?.value;
    const selectLi = e?.target?.attributes?.href?.value;
    debugger;
    if (selectLi || selectAnchor) setActive(selectLi || selectAnchor);
  };

  const buildMenu = props.menuList?.map((item) => (
    <a
      href={item.href}
      key={item.href}
      onClick={handleClick}
      className={active == item.href ? 'active' : ''}
    >
      <li key={item.label}>{item.label}</li>
    </a>
  ));

  return (
    <NavBarStyle>
      <ul>{buildMenu}</ul>
    </NavBarStyle>
  );
};

NavBar.defaultProps = {
  menuList: [
    {
      href: '#buttons',
      label: 'Buttons',
    },
    {
      href: '#brand',
      label: 'brand',
    },
    {
      href: '#box',
      label: 'Box',
    },
  ],
};

export default NavBar;
export { NavBar };
