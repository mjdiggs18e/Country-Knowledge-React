import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  useEffect(() => {
    fetchCountry();
  }, []);

  const [country, setCountry] = useState({});
  const { id } = useParams();

  const fetchCountry = async () => {
    const retrieveCountry = await fetch(
      `https://restcountries.eu/rest/v2/name/${id}`
    );

    const openCountry = await retrieveCountry.json();
    setCountry(openCountry[0]);
  };

  return (
    <div>
      <h1>{country.name}</h1>
      <img src={country.flag} alt={country.name} />
      <p>{country.capital}</p>
      <p>{country.region}</p>
      <p>{country.subregion}</p>
      <p>{country.population}</p>
      <p>{country.demonym}</p>
      <p>{country.timezones}</p>
      <p>{country.border}</p>
      <p>{country.nativeName}</p>
    </div>
  );
};

export default CountryDetail;
