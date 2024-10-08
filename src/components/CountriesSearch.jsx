import React, { useContext, useState } from 'react';
import { CountriesContext } from '../context/CountriesContext';

export default function CountriesSearch({ setSearch }) { // Receive setSearch as a prop
  const { setSelectedRegion } = useContext(CountriesContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    setDropdownOpen(false);
  };

  return (
    <div className="container mx-auto p-4 flex justify-between items-center gap-10">
      <form className="max-w-md flex-grow">
        <label htmlFor="default-search" className="sr-only">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full pl-10 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for a country..."
            required
            onChange={(e) => setSearch(e.target.value)} // Update search state
          />
        </div>
      </form>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="dropdwon sm:text-xs text-white bg-dark-blue hover:bg-dark-blue focus:ring-4 focus:outline-none focus:ring-dark-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
        >
          Filter by Region
          <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 z-10 bg-dark-blue text-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-dark-blue">
            <ul className="py-2 text-sm sm:text-xs">
              <li onClick={() => handleRegionClick('Africa')}>
                <a href="#" className="block px-4 py-2 hover:text-gray-300">Africa</a>
              </li>
              <li onClick={() => handleRegionClick('Americas')}>
                <a href="#" className="block px-4 py-2 hover:text-gray-300">Americas</a>
              </li>
              <li onClick={() => handleRegionClick('Asia')}>
                <a href="#" className="block px-4 py-2 hover:text-gray-300">Asia</a>
              </li>
              <li onClick={() => handleRegionClick('Europe')}>
                <a href="#" className="block px-4 py-2 hover:text-gray-300">Europe</a>
              </li>
              <li onClick={() => handleRegionClick('Oceania')}>
                <a href="#" className="block px-4 py-2 hover:text-gray-300">Oceania</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
