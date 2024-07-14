// ThemeToggler.js
import React, { useState, useEffect } from 'react';
import './ThemeToggler.css';

const ThemeToggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="theme-toggler">
      <div className="darkLight-btn flex justify-end" onClick={toggleTheme}>
        <span className={`icon ${!isDarkMode ? 'active' : ''}`} id="light-icon">
          <i className="la la-sun"></i>
        </span>
        <span className={`icon ${isDarkMode ? 'active' : ''}`} id="dark-icon">
          <i className="la la-moon"></i>
        </span>
      </div>
    </div>
  );
};

export default ThemeToggler;
