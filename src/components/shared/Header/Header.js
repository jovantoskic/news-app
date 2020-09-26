import React from 'react';
import { NavLink } from 'react-router-dom';

import { navItems } from './headerConfig';
import Search from '../Search';
import Countries from '../Countries';

import './Header.scss';

function Header() {
  return (
    <header className="header-container">
      {navItems.map(item => (
        <NavLink
          key={item.name}
          activeClassName="header-item-active"
          className="header-item"
          exact={item.exact}
          to={item.to}
        >
          {item.name}
        </NavLink>
      ))}
      <Search />
      <Countries countries={[{ state: 'us' }, { state: 'gb' }]} />
    </header>
  );
}

export default Header;
