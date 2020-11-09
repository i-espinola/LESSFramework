import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { ContextProvider } from '@contexts';
import { GlobalStyle, tokens } from '@theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContextProvider>
      <ThemeProvider theme={tokens}>
        <GlobalStyle theme={tokens} />
        <Component {...pageProps} />
      </ThemeProvider>
    </ContextProvider>
  );
};

export default App;
