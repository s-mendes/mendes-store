import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './route/Router';
import GlobalState from './contexts/GlobalState';

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
body {  
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #ebebeb;
}
`;

function App() {

  return (
    <>
      <GlobalStyle/>
      <GlobalState>
        <Router />
      </GlobalState>
    </>
  );
}

export default App;
