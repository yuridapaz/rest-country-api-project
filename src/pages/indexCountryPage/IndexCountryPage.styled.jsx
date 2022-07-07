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

  @media only screen and (max-width: 768px) {
    align-items: flex-start;
    padding-top: 4rem;
  }
`;

export const ReturnButton = styled.button`
  margin-right: auto;
  width: 120px;
  padding: 0.5rem;
  margin-bottom: 4rem;
  box-shadow: 0.2px 0.2px 4px #3a4d5d;
  background-color: ${({ theme }) => theme.element};
  color: ${({ theme }) => theme.text};
  border-radius: 5px;
  border: none;
  outline: none;

  @media only screen and (max-width: 768px) {
    width: 100px;
    padding: 0.3rem;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: 425px) {
    margin-bottom: 2rem;
  }
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

    .border-countries-div {
      font-size: 0.6rem;
      line-height: 2rem;
      .border-countries-sigla {
        font-weight: 400;
        padding: 0.2rem 0.8rem;
        margin: 0 0.5rem;
        border-radius: 5px;
        box-shadow: 0.2px 0.2px 4px hsl(209, 23%, 22%);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    .img-div {
      width: 50%;
    }

    .country-description {
      width: 80%;
      padding: 1rem;
    }
  }

  @media only screen and (max-width: 425px) {
    .img-div {
      width: 80%;
    }

    .country-description {
      padding: 1rem;
      .country-info {
        p {
          font-size: 0.8rem;
          line-height: 1.2rem;
        }
      }
      .border-countries-div {
        font-size: 0.5rem;
        line-height: 1.5rem;
        .border-countries-sigla {
          font-size: 0.45rem;
        }
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
        <div className='border-countries-div'>
          <h2>
            Border Countries:
            <span>
              {country.borders?.map((bordersCountries, i) => (
                <span key={i} className='border-countries-sigla'>
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
