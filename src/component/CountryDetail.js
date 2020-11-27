import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailHeader from './DetailHeader';
import { v4 as uuidv4 } from 'uuid';
import '../card.css';

const CountryDetail = () => {
  useEffect(() => {
    fetchCountry();
  }, []);

  const [country, setCountry] = useState({
    borders: [],
    currencies: [{}],
    languages: [{}],
    timezones: [],
    population: '',
    latlng: [],
  });
  const { id } = useParams();

  const fetchCountry = async () => {
    const retrieveCountry = await fetch(
      `https://restcountries.eu/rest/v2/name/${id}`
    );

    const openCountry = await retrieveCountry.json();
    setCountry(openCountry[0]);
  };

  return (
    <div className="country-holder">
      <h1 className="country-name">{country.name}</h1>
      <DetailHeader />
      <img className="country-flag" src={country.flag} alt={country.name} />
      <section className="country-flex">
        <div className="country-card">
          <span>Capital</span>
          <p className="country-capital">{country.capital}</p>
        </div>
        <div className="country-card">
          <span>Region</span>
          <p className="country-region">{country.region}</p>
        </div>
        <div className="country-card">
          <span>Subregion</span>
          <p className="country-subregion">{country.subregion}</p>
        </div>
        <div className="country-card">
          <span>Population</span>
          <p className="country-population">
            {country.population.toLocaleString()}
          </p>
        </div>
        <div className="country-card">
          <span>Demonym</span>
          <p className="country-demonym">{country.demonym}</p>
        </div>
        <div className="country-card">
          <span>Native Name</span>
          <p className="country-native-name">{country.nativeName}</p>
        </div>

        {/* Displays lat and lng for country*/}

        <div className="country-card">
          <span>Lat and Lng</span>
          {country.latlng.map((lat) => (
            <p key={uuidv4()} className="country-lat">
              {lat}
            </p>
          ))}
        </div>

        {/* Displays all languages used in country*/}

        <div className="country-card">
          <span>Languages</span>
          {country.languages.map((language) => (
            <p key={uuidv4()} className="country-language">
              {language.name}
            </p>
          ))}
        </div>

        {/* Displays all currencies used in country*/}

        <div className="country-card ">
          <span>Currencies</span>
          {country.currencies.map((currency) => (
            <div>
              <p key={uuidv4()} className="spancur">
                {currency.symbol}
              </p>
              <p key={uuidv4()} className="spancur">
                {currency.name}
              </p>
            </div>
          ))}
        </div>

        {/* Displays all timezones in countries*/}
        <div className="country-card ">
          <span>Timezones</span>
          {country.timezones.map((time) => (
            <p key={uuidv4()} className="country-timezone">
              {time}
            </p>
          ))}
        </div>

        {/* Displays all borders around the country*/}
        <div className="country-card final">
          <span>Borders</span>
          {country.borders.map((border) => (
            <p key={uuidv4()} className="country-border">
              {border}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CountryDetail;
