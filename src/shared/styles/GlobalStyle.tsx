import 'reset-css';
import { createGlobalStyle } from 'styled-components';
import '@fontsource/noto-sans';

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 16px;
    ${({ theme }) => theme.breakpoints.max('tablet')} {
      font-size: 14px;
    }
  }

  *, *::before, *::after {
    box-sizing: border-box;
    font-family: "Noto Sans";
    -webkit-tap-highlight-color: transparent;
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
    background-color: ${({ theme }) => theme.colors.background};
  }

  #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
