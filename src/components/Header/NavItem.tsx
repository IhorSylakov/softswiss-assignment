import React from 'react';
import { HeaderLink } from '../../types/types';
import './Header.scss';

export default function NavItem({
  text,
  link,
  children
}: HeaderLink) {
  return (
    <li className="NavItem">
      <a href={link} className="NavItem__nav-link">
        {children ? (
          <>
            {children}
          </>
        ) : (
          text
        )}
      </a>
    </li>
  );
}
