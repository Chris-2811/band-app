import React, { useContext, useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import DarkModeContext from '../context/DarkModeContext';

function DarkToggle() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    if (!darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <button
      id="dark-mode-toggle"
      class="dark-mode-toggle"
      aria-label="toggle dark mode"
      onClick={() => toggleDarkMode()}
    >
      {darkMode ? (
        <FaSun color="white" className="" size={22} />
      ) : (
        <FaMoon color="black" size={22} />
      )}
    </button>
  );
}

export default DarkToggle;
