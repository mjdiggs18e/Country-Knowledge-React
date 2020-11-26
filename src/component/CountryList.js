import React, { useEffect, useState } from 'react';
import Country from './Country';

const CountryList = () => {
  useEffect(() => {
    fetchCountry();
  }, []);

  const [countries, setCountries] = useState([]);

  const fetchCountry = async () => {
    const retrieveCountries = await fetch(
      'https://restcountries.eu/rest/v2/all'
    );

    const openCountries = await retrieveCountries.json();
    setCountries(openCountries);
  };

  return (
    <div className="card-grid">
      {countries.map((country) => (
        <Country key={country.alpha2Code} data={country} />
      ))}
    </div>
  );
};

export default CountryList;
