import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-text">© {currentYear} <span className="footer-accent">Ujjwal Deep</span> — All rights reserved</div>
      <div className="footer-text">Built with <span className="footer-accent">React · CSS</span> — Syne · Space Mono</div>
    </footer>
  );
};

export default Footer;
