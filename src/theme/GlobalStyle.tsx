import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;

    margin: 0;
    max-height: 100%;
    max-width: 100%;
    min-height: 100%;
    min-width: 100%;
    
    padding: 0;

    width: 100%;
  }
`;
