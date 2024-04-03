import React from 'react';
import { HeaderLink } from '../../types/types';
import './Header.scss';

export default function NavItem({
  text,
  link,
  children
}: HeaderLink) {
  return (
    <li className="NavItem__nav-item">
      <a href={link} className="NavItem__nav-link">
        {children ? (
          <div>
            {children}
          </div>
        ) : (
          text
        )}
      </a>
    </li>
  );
}
