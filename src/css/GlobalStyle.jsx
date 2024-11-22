import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Montserrat', sans-serif !important;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --background-color-light: #ffffff;
    --background-color-dark: #000000;
    --text-color-light: #000000;
    --text-color-dark: #ffffff;
    --title-color-light: #000000;
    --title-color-dark: #eeeeee;
  }

  body {
    background-color: var(--background-color-light);
    color: var(--text-color-light);
    transition: all 0.3s ease;
  }

  body.dark-mode {
    background-color: var(--background-color-dark);
    color: var(--text-color-dark);
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--title-color-light);
    transition: color 0.3s ease;
  }

  body.dark-mode h1, 
  body.dark-mode h2, 
  body.dark-mode h3, 
  body.dark-mode h4, 
  body.dark-mode h5, 
  body.dark-mode h6 {
    color: var(--title-color-dark);
  }

  p {
    color: var(--text-color-light);
    transition: color 0.3s ease;
  }

  body.dark-mode p {
    color: var(--text-color-dark);
  }

  a {
    color: var(--link-color-light);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  body.dark-mode a {
    color: var(--link-color-dark);
  }
`

export default GlobalStyle
