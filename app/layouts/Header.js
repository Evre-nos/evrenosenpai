"use client"

import React, { useState, useEffect } from 'react';
import Img from "@/app/components/Image";
import "@/app/globals.css";

const Header = () => {
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  const toggleNavbar = () => {
    setNavActive(!navActive);
  };

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <header className={`header ${headerActive ? 'active' : ''}`} data-header>
      <div className="container">

        <a href="#" className="logo">
          <Img src="logo.png" width="170" height="40" alt="Soren Blank" />
        </a>

        <button className={`nav-toggle-btn ${navActive ? 'active' : ''}`} onClick={toggleNavbar} aria-label="Toggle menu">
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>

        <nav className={`navbar ${navActive ? 'active' : ''}`} data-navbar>
          <ul className="navbar-list">
            <li><a href="#home" className="navbar-link">Home</a></li>
            <li><a href="#services" className="navbar-link">Services</a></li>
            <li><a href="#skills" className="navbar-link">Skills</a></li>
            <li><a href="#projects" className="navbar-link">Portfolio</a></li>
            <li><a href="#blogs" className="navbar-link">Blog</a></li>
            <li><a href="#contact" className="navbar-link">Contact</a></li>
          </ul>
        </nav>

        <div className={`overlay ${navActive ? 'active' : ''}`} onClick={toggleNavbar} data-overlay></div>

      </div>
    </header>
  )
}

export default Header;