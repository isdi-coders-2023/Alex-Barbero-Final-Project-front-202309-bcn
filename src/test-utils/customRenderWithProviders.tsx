import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { Provider } from "react-redux";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, store } from "../store";
import GlobalStyle from "../styles/GlobalStyle";
import { setupStore } from "./setUpStore";

export interface InitialPropsStructure {
  initialPath: string;
  preloadedState: PreloadedState<RootState>;
}

export interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
  isProvider?: boolean;
}

const customRenderWithProviders = (
  children: React.ReactElement,
  initialProps?: InitialPropsStructure,
) => {
  const testStore = initialProps
    ? setupStore(initialProps.preloadedState)
    : store;

  const setMemoryRouter: React.ReactElement = (
    <MemoryRouter
      initialEntries={[initialProps ? initialProps.initialPath : ""]}
    >
      <Provider store={testStore}>
        <GlobalStyle />
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </Provider>
    </MemoryRouter>
  );

  return render(setMemoryRouter);
};

export default customRenderWithProviders;
