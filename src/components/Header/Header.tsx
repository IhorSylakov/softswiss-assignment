import React from 'react';
import data from '../../data/headerLinks.json';
import { HeaderLink } from '../../types/types';
import { ReactComponent as HeaderLogo } from '../../images/header-logo.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import NavItem from './NavItem';
import './Header.scss';

export default function Header() {
  const headerLinks: HeaderLink[] = data.list;

  return (
    <header className="Header">
      <a href="/" className="Header__logo">
        <HeaderLogo className="Header__logo-img" />
      </a>
      <nav className="Header__nav">
        <ul className="Header__nav-list">
          {headerLinks.map((item) => (
            <NavItem
              key={item.id}
              {...item}
            />
          ))}
          <NavItem
            id={0}
            link="/"
          >
            <Cart />
          </NavItem>
        </ul>
      </nav>
    </header>
  );
}
