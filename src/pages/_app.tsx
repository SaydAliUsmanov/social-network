import type { AppProps } from 'next/app';
import 'shared/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
