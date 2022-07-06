import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
`;

export const Cointainer = styled.div`
  max-width: 1280px;
  padding: 2rem;
  margin-top: 3.5rem;
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
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
`;

// export const SelectForm = () => {
//   return (
//     <Select>
//       <option value='' hidden>
//         Filter by Region
//       </option>
//       <option value='africa'>None</option>
//       <option value='africa'>Africa</option>
//       <option value='america'>América</option>
//       <option value='asia'>Asia</option>
//       <option value='europe'>Europe</option>
//       <option value='oceania'>Oceania</option>
//     </Select>
//   );
// };

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 2.5rem;
`;
