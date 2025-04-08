import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f5f5f5;
     margin: 0;
    font-family: 'Roboto', sans-serif;
    transition: background-color 0.3s, color 0.3s;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyles;
