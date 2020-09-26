import React from 'react';
import { NavLink } from 'react-router-dom';

import { navItems } from './headerConfig';
import Search from '../Search';

import './Header.scss';

function Header() {
  return (
    <header className="header-container">
      {navItems.map(item => (
        <NavLink
          key={item.name}
          activeClassName="link-item-active"
          className="link-item"
          exact={item.exact}
          to={item.to}
        >
          {item.name}
        </NavLink>
      ))}
      <Search />
    </header>
  );
}

export default Header;
