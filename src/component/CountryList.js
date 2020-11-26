import React, { useEffect, useState } from 'react';
import Country from './Country';
import '../card.css';

const CountryList = () => {
  useEffect(() => {
    fetchCountry();
  }, []);

  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const filteredCountries = countries.filter((country) => {
    return country.name.toLowerCase().includes(search.toLowerCase());
  });

  const fetchCountry = async () => {
    const retrieveCountries = await fetch(
      'https://restcountries.eu/rest/v2/all'
    );

    const openCountries = await retrieveCountries.json();
    setCountries(openCountries);
  };

  return (
    <div className="country-input">
      <input
        type="text"
        placeholder="Search for a country"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="card-grid">
        {filteredCountries.map((country) => (
          <Country key={country.alpha2Code} data={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
