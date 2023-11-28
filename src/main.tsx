import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);
