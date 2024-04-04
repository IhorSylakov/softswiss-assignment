import React from 'react';
import data from '../../data/headerLinks.json';
import { HeaderLink } from '../../types/types';
import { ReactComponent as HeaderLogo } from '../../images/header-logo.svg';
import { ReactComponent as BurgerMenu } from '../../images/burger-menu.svg';
import { ReactComponent as Cart } from '../../images/cart.svg';
import NavItem from './NavItem';
import './Header.scss';

export default function Header() {
  const headerLinks: HeaderLink[] = data.list;

  return (
    <header className="Header">
      <div className="Header__wrapper">
        <a
          href="/"
          className="Header__logo"
          aria-label="Site logo"
        >
          <HeaderLogo className="Header__logo-img" />
        </a>
        <nav className="Header__nav">
          <input
            type="checkbox"
            id="menuOpener"
            aria-hidden="true"
            tabIndex={-1}
            className="Header__nav-opener"
          />
          <label
            htmlFor="menuOpener"
            aria-label="Show menu"
            className="Header__nav-opener-icon"
          >
            <BurgerMenu />
          </label>
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
              aria-label="Go to cart"
            >
              <Cart />
            </NavItem>
          </ul>
        </nav>
      </div>
    </header>
  );
}
