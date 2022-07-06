import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { countriesClient as getCountriesClient } from '../../services/CountriesClient';
import * as C from './IndexCountriesPage.styled';
import CountryCard from '../../components/countryCard/CountryCard';
import IndexCountryPage from '../indexCountryPage/IndexCountryPage';

function IndexCountriesPage() {
  const countriesClient = getCountriesClient();
  const [countries, setCountries] = useState([]);
  const [filteredInput, setFilteredInput] = useState('');

  useEffect(() => {
    async function fetchData() {
      const countriesList = await countriesClient.getCountries();
      console.log(countriesList);
      setCountries(countriesList);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const searchingCountryOrRegion = (country) => {
    return (
      country.name.common.toLowerCase().includes(filteredInput.toLocaleLowerCase()) ||
      country.region.toLocaleLowerCase().includes(filteredInput.toLocaleLowerCase())
    );
  };

  return (
    <C.Body>
      <C.Cointainer>
        <C.FilterContainer>
          <C.Input
            type='text'
            placeholder='Search for a country...'
            onChange={(e) => setFilteredInput(e.target.value)}
          />
          <C.Select onChange={(e) => setFilteredInput(e.target.value)}>
            <option value='' hidden>
              Filter by Region
            </option>
            <option value=''>None</option>
            <option value='africa'>Africa</option>
            <option value='america'>América</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </C.Select>
        </C.FilterContainer>
        <C.CardsContainer>
          {countries.filter(searchingCountryOrRegion).map((country, i) => {
            return (
              <Link key={i} to={`country/${country.name.common}`} element={<IndexCountryPage />}>
                <CountryCard country={country} key={i} />
              </Link>
            );
          })}
        </C.CardsContainer>
      </C.Cointainer>
    </C.Body>
  );
}

export default IndexCountriesPage;

{
  /* <Link
to={`product/${product.code_color}`}
element={<ProductPage productId={product.code_color} />}
key={i}
className='product__card__link'
>
<ProductCard product={product} />
</Link> */
}
