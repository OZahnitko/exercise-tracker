import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { theme } from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <theme.GlobalStyle />
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
