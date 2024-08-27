import React, { createContext } from 'react';
import { useFetch } from '../components/useFetch';

export const CountriesContext = createContext();

export function CountriesProvider({ children }) {
  const { data: countries, loading, error } = useFetch('https://restcountries.com/v3.1/all');

  return (
    <CountriesContext.Provider value={{ countries, loading, error }}>
      {children}
    </CountriesContext.Provider>
  );
}
