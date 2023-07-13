import { HelmetProvider } from "react-helmet-async";
import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  const helmetContext = {};
  return(
    <>
    <HelmetProvider
      context={helmetContext}
      >
      <GlobalStyles/>
      <Component {...pageProps} />
    </HelmetProvider>
    </>
  ) 
}
