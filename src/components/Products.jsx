import React, { useContext } from 'react';
import CountriesCard from './CountriesCard';
import { CountriesContext } from '../context/CountriesContext';
export default function Products() {
  const { countries, loading, error } = useContext(CountriesContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className='products w-full bg-very-dark-blue-bg'>
      <div className="prods--container container mx-auto px-4 py-2 flex flex-wrap justify-between items-center gap-x-4 
        md:px-4 md:w-full 
        sm:w-[320px] sm:px-0
        ">
        {countries.map((country) => (
          <CountriesCard
            key={country.cca3}  
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital ? country.capital[0] : 'N/A'}
            flag={country.flags.svg}
            cca3={country.cca3}
          />
        ))}
      </div>
    </div>
  );
}
