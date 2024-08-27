import React from 'react'
import '../styles/style.css'
import { useNavigate } from 'react-router-dom';
function CountriesCard({ name, population, region, capital, flag, cca3}) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/country/${cca3}`); 
  };
  return (
    <div className='card--cotnainer' onClick={handleClick}>
          <div className="r w-80  bg-dark-blue rounded-lg mt-8">
            <img src={flag} alt={`${name} flag`} className='w-full h-40 object-cover' />
              <div className="information px-3 py-2">
                <h4 className='text-2xl text-white font-semibold mb-4 mt-3'>{name}</h4>
                <p><span className='text-white mb-1'>Population: </span><span className='text-gray-300'>{population.toLocaleString()}</span></p>
                <p><span className='text-white mb-1'>Region: </span><span className='text-gray-300'>{region}</span></p>
                <p><span className='text-white mb-1'>Capital: </span><span className='text-gray-300'>{capital}</span></p>
              </div>
          </div>
    </div>
  )
}

export default CountriesCard