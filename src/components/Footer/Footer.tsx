import React from 'react';
import './Footer.scss';
import footerLogo from '../../images/footer-logo.webp';

export default function Footer() {
  return (
    <footer className="Footer">
      <img
        width="93"
        height="81"
        src={footerLogo}
        loading="lazy"
        className="Footer__logo"
        alt="Exciting space adventure!"
      />

      <p className="Footer__text">Exciting space adventure!</p>
    </footer>
  );
}
