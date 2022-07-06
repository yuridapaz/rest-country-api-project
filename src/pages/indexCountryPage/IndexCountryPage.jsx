import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as C from './IndexCountryPage.styled';
import axios from 'axios';

function IndexCountryPage() {
  const [country, setCountry] = useState([]);
  const { countryName } = useParams();

  const fetchCountryData = async () => {
    try {
      const result = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
      setCountry(result.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    fetchCountryData();
    console.log(country);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countryName]);

  return (
    <C.Body>
      <div className='full-card-container'>
        <C.ReturnButton onClick={() => console.log(country)}>Back</C.ReturnButton>
        {country.map((country, i) => {
          return <C.CountryDescriptionCard country={country} key={i} />;
        })}
      </div>
    </C.Body>
  );
}

export default IndexCountryPage;
