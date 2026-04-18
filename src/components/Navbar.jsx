import React, { useState } from 'react';

const Navbar = ({ status }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={isMenuOpen ? 'nav-active' : ''}>
      <div className="nav-logo">UJJWAL<span>_</span>DEEP</div>
      
      <div className="nav-status">
        <div className="status-dot"></div>
        {status}
      </div>

      <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
        <div className="bar"></div>
        <div className="bar"></div>
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><a href="#skills" onClick={closeMenu}>SKILLS</a></li>
        <li><a href="#projects" onClick={closeMenu}>PROJECTS</a></li>
        <li><a href="#experience" onClick={closeMenu}>EXPERIENCE</a></li>
        <li><a href="#about" onClick={closeMenu}>ABOUT</a></li>
        <li><a href="#contact" onClick={closeMenu}>CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
