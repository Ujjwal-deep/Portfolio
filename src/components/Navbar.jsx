import React from 'react';

const Navbar = ({ status }) => {
  return (
    <nav>
      <div className="nav-logo">UJJWAL<span>_</span>DEEP</div>
      <div className="nav-status">
        <div className="status-dot"></div>
        {status}
      </div>
      <ul className="nav-links">
        <li><a href="#skills">SKILLS</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
