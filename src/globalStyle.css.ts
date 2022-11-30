import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.2rem;
    line-height: 24px;
    font-weight: 400;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  a {
    font-weight: 500;
    text-decoration: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-width: 320px;
    min-height: 100vh;
  }

  h1 {
    font-size: 3.2em;
    line-height: 1.1;
  }
`;

export default GlobalStyle;
