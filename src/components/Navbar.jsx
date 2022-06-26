import React from "react";

function Navbar() {
  return (
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <a href="#hero" className="nav-link scrollto">
            <i className="bi bi-house-door"></i> <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#about" className="nav-link scrollto">
            <i className="bi bi-person"></i> <span>About</span>
          </a>
        </li>
        <li>
          <a href="#skills" className="nav-link scrollto">
            <i className="bi bi-lightbulb"></i> <span>Skills</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-link scrollto">
            <i className="bi bi-briefcase"></i> <span>Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-link scrollto">
            <i className="bi bi-envelope-paper"></i> <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
