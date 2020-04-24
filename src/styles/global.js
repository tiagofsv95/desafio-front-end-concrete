import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html, body, #root {
    min-height: 100%
  }

  body {
    background: #FFFFFF;
    -webkit-font-smoothing: antialiased !important;
  }

  body, input, button {
    font: 14px 'Releway', sans-serif;
  }

  button {
    cursor: pointer;
  }

`;
