import React from 'react';
import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 240px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  .image--div {
    width: 100%;
    height: 140px;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    }
  }

  .content--div {
    padding: 1.5rem 1rem 2rem 1rem;
    background-color: ${({ theme }) => theme.element};
    color: ${({ theme }) => theme.text};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    h1 {
      font-size: 1.3rem;
      font-weight: 800;
      margin-bottom: 0.7rem;
    }

    p {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 0.4rem;
    }

    span {
      font-weight: 300;
    }
  }
`;

const CountryCard = ({ country }) => {
  return (
    <CardContainer>
      <div className='image--div'>
        <img src={country.flags.png} alt='' />
      </div>
      <div className='content--div'>
        <h1>{country.name.common}</h1>
        <p className='population'>
          Population: <span>{country.population}</span>
        </p>
        <p className='region'>
          Region: <span>{country.region}</span>
        </p>
        <p className='capital'>
          Capital: <span>{country.capital}</span>
        </p>
      </div>
    </CardContainer>
  );
};

export default CountryCard;
