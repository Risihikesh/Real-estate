import React, { createContext, useState, useEffect } from 'react';


import { RenthouseData } from '../data';


export const HouseContext = createContext();


const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(RenthouseData);
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    const allCountries = houses.map((house) => {
      return house.country;
    });

   
    const uniqueCountries = ['Location (any)', ...new Set(allCountries)];

     setCountries(uniqueCountries);
  }, []);

  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    });

    const uniqueProperties = ['Property type (any)', ...new Set(allProperties)];

   
    setProperties(uniqueProperties);
  }, []);

  const handleClick = () => {
    setLoading(true);
  
    setTimeout(() => {
      const filteredHouses = RenthouseData.filter((house) => {
        const housePrice = parseInt(house.price);
        const isCountryMatch =
          country === 'Location (any)' || house.country === country;
        const isPropertyMatch =
          property === 'Property type (any)' || house.type === property;
        const isPriceMatch =
          price === 'Price range (any)' ||
          (housePrice >= minPrice && housePrice <= maxPrice);
  
        return isCountryMatch && isPropertyMatch && isPriceMatch;
      });
  
      setHouses(filteredHouses);
      setLoading(false);
    }, 1000);
  };
  

  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        handleClick,
        houses,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;