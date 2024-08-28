import React, { createContext } from 'react';
import { useFetch } from '../components/useFetch';
import { useState } from 'react';
export const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all');
  const [selectedRegion, setSelectedRegion] = useState(''); 
  return (
    <CountriesContext.Provider value={{ countries, loading, error, selectedRegion, setSelectedRegion }}>
      {children}
    </CountriesContext.Provider>
  );
}
