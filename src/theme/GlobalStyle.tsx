import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    font-family: "Inter", sans-serif;
    font-size: 16px;

    height: 100%;

    margin: 0;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;

    padding: 0;

    width: 100%;
  }

  h1,
  h2,
  h3 {
    margin: 0;

    font-family: "Nunito", sans-serif;
    font-weight: 900;

    padding: 0;
  }

  input {
    font-family: "Inter", sans-serif;
  }
`;
