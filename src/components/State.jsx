import React, { useContext } from 'react';
import { RiMapPinLine } from 'react-icons/ri';
import { HouseContext } from './HouseContext';

const StateDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext);
  const { handleClick } = useContext(HouseContext);

  const handleSelectCountry = (selectedCountry) => {
    setCountry(selectedCountry);
  };

  return (
    <div className='flex'>
      {countries.map((countryName, index) => (
        <div key={index} className="mr-2">
          <button
            onClick={() => {
              handleSelectCountry(countryName);
              handleClick();
            }}
            className={`flex items-center cursor-pointer ${
              country === countryName ? 'bg-violet-700 text-white' : 'bg-white text-black'
            }`}
          >
            <RiMapPinLine className='mr-1' />
            {countryName}
          </button>
        </div>
      ))}
    </div>
  );
};

export default StateDropdown;
