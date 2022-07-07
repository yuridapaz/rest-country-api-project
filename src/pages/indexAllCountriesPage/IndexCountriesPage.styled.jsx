import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Cointainer = styled.div`
  width: 100%;
  padding: 2rem;
  margin-top: 3.5rem;
  a {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2rem 2rem 2rem;

  @media only screen and (max-width: 425px) {
    flex-direction: column;
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 25rem;
  padding: 0.9rem;
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  border-radius: 5px;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.text};
  }
  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text};
  }

  @media only screen and (max-width: 768px) {
    width: 50%;
  }

  @media only screen and (max-width: 425px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export const Select = styled.select`
  padding: 0.9rem;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.text};
  background-color: ${({ theme }) => theme.element};
  &:focus {
    outline: none;
  }

  @media only screen and (max-width: 425px) {
    width: 50%;
  }
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2.2rem;

  @media only screen and (max-width: 1024px) {
    gap: 1rem;
  }

  @media only screen and (max-width: 425px) {
    padding: 1.7rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
