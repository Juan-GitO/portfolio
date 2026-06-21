"use client";

import { useEffect, useState, useCallback } from "react";
import "./ThemeSwitcher.css";
import PropTypes from "prop-types";

const ThemeSwitcher = ({ darkClassName = "dark" }) => {
  // State to hold the selected theme
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Apply the selected theme when the component mounts
  useEffect(() => {
    // Check the user's preferred color scheme on client side
    const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDarkMode);
    setIsMounted(true);
  }, []);

  // Apply the selected theme by adding/removing a class to the html element
  const applyTheme = useCallback(() => {
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add(darkClassName);
    } else {
      htmlElement.classList.remove(darkClassName);
    }
  }, [isDarkMode, darkClassName]);

  useEffect(() => {
    if (isMounted) {
      applyTheme();
    }
  }, [applyTheme, isMounted]);

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // (applyTheme defined with useCallback above)

  // Don't render until mounted to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <button
        data-testid="themeSwitcherButton"
        className="btn"
        onClick={toggleTheme}
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 1V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M12 21V23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4.22 4.22L5.64 5.64" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M18.36 18.36L19.78 19.78" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M21 12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M4.22 19.78L5.64 18.36" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M18.36 5.64L19.78 4.22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.5 3.5A9 9 0 1018 18A7 7 0 0114.5 3.5z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

ThemeSwitcher.propTypes = {
  darkClassName: PropTypes.string,
};

export default ThemeSwitcher;
