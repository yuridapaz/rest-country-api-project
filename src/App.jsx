import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexCountriesPage from './pages/indexAllCountriesPage/IndexCountriesPage';
import IndexCountryPage from './pages/indexCountryPage/IndexCountryPage';
import * as C from './layout/Layout.styled';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, GlobalStyles } from './Theme';

function App() {
  const [theme, setTheme] = useState('lightTheme');
  const themeToggle = () => {
    theme === 'lightTheme' ? setTheme('darkTheme') : setTheme('lightTheme');
  };

  return (
    <>
      <ThemeProvider theme={theme === 'lightTheme' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <C.Header onClick={themeToggle} />
        <Router>
          <Routes>
            <Route path='/' element={<IndexCountriesPage />} />
            <Route path='/country' element={<IndexCountryPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
