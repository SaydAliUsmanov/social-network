import { createGlobalStyle } from 'styled-components';
import '@fontsource/noto-sans';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "Noto Sans";
    -webkit-tap-highlight-color: transparent;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  ul, li {
    list-style: none;
  }


  *:active, *:hover, *:focus {
    outline: none;
}

  html {
    width: 100%;
    height: 100%;
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default GlobalStyle;
