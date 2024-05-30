"use client";

// Importing necessary dependencies and styles
import Img from "@/app/components/Image"; // Custom Image component
import "@/app/globals.css"; // Global styles
import React, { useEffect, useState } from "react"; // React library and hooks

// Header functional component
const Header = () => {
  // State variables for navigation and header activation
  const [navActive, setNavActive] = useState(false);
  const [headerActive, setHeaderActive] = useState(false);

  // Function to toggle the navigation activation state
  const toggleNavbar = () => {
    setNavActive(!navActive);
  };

  // useEffect hook to add a scroll event listener to the window
  useEffect(() => {
    // Function to check the scroll position and set the header activation state
    const checkScroll = () => {
      if (window.scrollY >= 100) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    // Adding the scroll event listener
    window.addEventListener("scroll", checkScroll);
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  // Render the header with navigation and logo
  return (
    <header className={`header ${headerActive ? "active" : ""}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <Img src="logo-alt.png" width="170" height="40" alt="evrenos" />
        </a>

        <button
          className={`nav-toggle-btn ${navActive ? "active" : ""}`}
          onClick={toggleNavbar}
          aria-label="Toggle menu"
        >
          <span className="line line-1"></span>
          <span className="line line-2"></span>
        </button>

        <nav className={`navbar ${navActive ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="navbar-link">
                Services
              </a>
            </li>
            <li>
              <a href="#skills" className="navbar-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="navbar-link">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#blogs" className="navbar-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#contact" className="navbar-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div
          className={`overlay ${navActive ? "active" : ""}`}
          onClick={toggleNavbar}
          data-overlay
        ></div>
      </div>
    </header>
  );
};

// Exporting the Header component as the default export of this module
export default Header;
