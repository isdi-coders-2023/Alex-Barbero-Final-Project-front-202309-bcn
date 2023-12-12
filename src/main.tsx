import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import GlobalStyle from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import mainTheme from "./styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import "@fontsource/jaldi";
import "@fontsource/keania-one";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);
