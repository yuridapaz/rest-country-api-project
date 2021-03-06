import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }
`;

export const lightTheme = {
  background: 'hsl(0, 0%, 98%)',
  text: 'hsl(200, 15%, 8%)',
  element: 'hsl(0, 0%, 100%)',
  input: 'hsl(0, 0%, 52%)',
  boxShadow: '0.5px 0.5px 10px gray',
};

export const darkTheme = {
  background: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  element: 'hsl(209, 23%, 22%)',
  boxShadow: '0.4px 0.4px 8px hsl(209, 23%, 22%)',
};
