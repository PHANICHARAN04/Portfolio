import React, { useState, useEffect } from 'react';
import '../styles/tooplate-style.css';
import '../styles/unicons.css';
import '../styles/Navbar.css'; // Import the new Navbar.css

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleColorModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-sm navbar-light ${scrolling ? 'navbar-scrolling' : ''}`}>
        <div className="container">
          <a className="navbar-brand" href="/">
            <i className="uil uil-user icon-large"></i> U V Phani Charan
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a href="#about" className="nav-link">
                  <span data-hover="About">About</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">
                  <span data-hover="Skills">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">
                  <span data-hover="Projects">Projects</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#certificates" className="nav-link">
                  <span data-hover="Certifications">Certifications</span>
                </a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">
                  <span data-hover="Contact">Contact</span>
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ml-lg-auto">
              <div className="ml-lg-4">
                <div
                  className="color-mode d-lg-flex justify-content-center align-items-center"
                  onClick={handleColorModeToggle}
                >
                  <i className={`icon-large ${darkMode ? 'uil uil-sun' : 'uil uil-moon'}`}></i>
                  {darkMode ? 'Light mode' : 'Dark mode'}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
