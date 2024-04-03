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
        alt=""
      />

      <p>Exciting space adventure!</p>
    </footer>
  );
}
