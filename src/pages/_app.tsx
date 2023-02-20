import GlobalStyle from '@/styles/global-styles';
import theme from '@/styles/theme';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Script
        strategy="beforeInteractive"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`}
      ></Script>

      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
