import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  #root {
    height: 100vh;
  }
`;

export default GlobalStyle;
