import React from 'react';
import { useState, useEffect } from 'react';
import { countriesClient as getCountriesClient } from '../../services/CountriesClient';
import * as C from './IndexCountriesPage.styled';
import CountryCard from '../../components/countryCard/CountryCard';

function IndexCountriesPage() {
  const countriesClient = getCountriesClient();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const countriesList = await countriesClient.getCountries();
      console.log(countriesList);
      setCountries(countriesList);
    }
    fetchData();
  }, []);

  return (
    <>
      <C.Body>
        <C.Cointainer>
          <C.FilterContainer>
            <C.Input type='text' placeholder='Search for a country...' />
            <C.SelectForm />
          </C.FilterContainer>
          <C.CardsContainer>
            {countries.map((country, i) => {
              return <CountryCard country={country} key={i} />;
            })}
          </C.CardsContainer>
        </C.Cointainer>
      </C.Body>
    </>
  );
}

export default IndexCountriesPage;
