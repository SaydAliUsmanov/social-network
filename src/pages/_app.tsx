import type { AppProps } from 'next/app';
import { GlobalStyle, light } from 'shared/styles';
import 'shared/styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
