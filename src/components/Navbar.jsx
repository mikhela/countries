import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="w-full bg-dark-blue">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link
          className="text-white text-lg md:text-xl font-semibold no-underline"
          to="/"
        >
          Where in the world?
        </Link>
        <button
          className="text-white px-4 py-2 flex items-center text-sm md:text-base"
          type="button"
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <>
              <FontAwesomeIcon icon={faMoon} className="mr-2" />
              Dark Mode
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faSun} className="mr-2" />
              Light Mode
            </>
          )}
        </button>
      </div>
    </nav>
  );
}
