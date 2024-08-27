import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../components/useFetch';
import '../styles/CountryDetails.css'

export default function Country() {
  const { cca3 } = useParams();
  const { data, loading, error } = useFetch(`https://restcountries.com/v3.1/alpha/${cca3}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const country = data ? data[0] : null;
  if (!country) return <div>No data found</div>;

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    timezones,
    borders,
  } = country;

  const commonName = name?.common || 'N/A';
  const flag = flags?.svg || '';
  const capitalCity = capital ? capital[0] : 'N/A';
  const languageList = languages ? Object.values(languages).join(', ') : 'N/A';
  const currencyList = currencies
    ? Object.values(currencies).map(curr => curr.name).join(', ')
    : 'N/A';
  const timezoneList = timezones ? timezones.join(', ') : 'N/A';

  return (
    <div className="country-details bg-very-dark-blue-bg text-white py-10 mt-20">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <img src={flag} alt={`${commonName} flag`} className="w-full lg:w-1/2 object-cover" />
          <div className="information mt-6 lg:mt-0 lg:w-1/2">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">{commonName}</h1>
            <div className="about--country flex flex-col lg:flex-row lg:gap-10">
              <div className="block flex-1 mb-4 lg:mb-0">
                <p className="text-lg font-medium">Population: <span className="text-gray-300">{population?.toLocaleString() || 'N/A'}</span></p>
                <p className="text-lg font-medium">Region: <span className="text-gray-300">{region || 'N/A'}</span></p>
                <p className="text-lg font-medium">Subregion: <span className="text-gray-300">{subregion || 'N/A'}</span></p>
                <p className="text-lg font-medium">Capital: <span className="text-gray-300">{capitalCity}</span></p>
              </div>
              <div className="block flex-1">
                <p className="text-lg font-medium">Languages: <span className="text-gray-300">{languageList}</span></p>
                <p className="text-lg font-medium">Currencies: <span className="text-gray-300">{currencyList}</span></p>
                <p className="text-lg font-medium">Timezones: <span className="text-gray-300">{timezoneList}</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
