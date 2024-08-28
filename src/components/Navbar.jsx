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
              <FontAwesomeIcon icon={faMoon} className="mr-2 text-white cursor-no" />
      </div>
    </nav>
  );
}
