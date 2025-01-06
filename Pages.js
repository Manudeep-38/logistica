import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Pages.css";

const Pages = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
    <div className="navbar-logo">Logistica</div>
    <ul className="navbar-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
      <li
        className="dropdown"
        onMouseEnter={toggleDropdown}
        onMouseLeave={toggleDropdown}
      >
          Pages
          <ul className={`dropdown-menu ${isDropdownOpen ? "show" : ""}`}>
            <li><Link to="/pricing">Pricing Plan</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/free-quote">Free Quote</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/404">404 Page</Link></li>
          </ul>
        </li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="contact">
        <i className="fas fa-phone"></i> +012 345 6789
      </div>
    </nav>
  );
};

export default Pages;
