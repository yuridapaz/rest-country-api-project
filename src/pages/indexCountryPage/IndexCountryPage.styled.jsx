import React from 'react';
import styled from 'styled-components';

export const Body = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  .full-card-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const ReturnButton = styled.button`
  margin-right: auto;
  width: 120px;
  padding: 0.5rem;
  margin-bottom: 4rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 5px;
  border: none;
  outline: none;
`;

export const CountryDescriptionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  .img-div {
    width: 45%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .country-description {
    width: 45%;
    padding: 2rem;

    .country-name {
      margin-bottom: 1rem;
    }

    .country-info {
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.5rem;
      p {
        flex: 1;
        font-size: 0.8rem;
        font-weight: 800;
        line-height: 1.5rem;
        span {
          margin-left: 3px;
          font-weight: 400;
        }
      }
    }

    .border-countries {
      font-size: 0.8rem;
      .border-countries {
        font-weight: 400;
        padding: 0.2rem 0.8rem;
        margin: 0 0.5rem;
        border-radius: 5px;
        box-shadow: 0.2px 0.2px 5px #2b394541;
      }
    }
  }
`;

export const CountryDescriptionCard = ({ country }) => {
  return (
    <CountryDescriptionContainer>
      <div className='img-div'>
        <img src={country.flags.png} alt='' />
      </div>
      <div className='country-description'>
        <h1 className='country-name'>{country.name.common}</h1>
        <div className='country-info'>
          <p>
            Native Name:
            <span>{country.altSpellings[1]}</span>
          </p>
          <p>
            Population:
            <span> {Intl.NumberFormat('en').format(Number(country.population))} </span>
          </p>
          <p>
            Region:<span>{country.region} </span>
          </p>
          <p>
            Sub Region:<span>{country.subregion}</span>
          </p>
          <p>
            Capital:<span>{country.capital}</span>
          </p>
          <p>
            Top Level Domain:<span>{country.tld}</span>
          </p>
          <p>
            Currencies:
            <span>
              {Object.keys(country.currencies).map((cur, i) => (
                <span key={i}> {cur} </span>
              ))}
            </span>
          </p>
          <p>
            Languages:
            <span>
              <span>{Object.values(country.languages).join(', ')}</span>
            </span>
          </p>
        </div>
        <div className='border-countries'>
          <h2>
            Border Countries:
            <span>
              {country.borders?.map((bordersCountries, i) => (
                <span key={i} className='border-countries'>
                  {' '}
                  {bordersCountries}{' '}
                </span>
              ))}
            </span>
          </h2>
        </div>
      </div>
    </CountryDescriptionContainer>
  );
};
