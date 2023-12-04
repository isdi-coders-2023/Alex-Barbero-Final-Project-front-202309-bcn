import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { Provider } from "react-redux";
import { PreloadedState } from "@reduxjs/toolkit";
import { RootState } from "../store";
import GlobalStyle from "../styles/GlobalStyle";
import { setupStore } from "./setUpStore";
import recordsMock from "../mocks/recordsMock";
import { uiInitialState } from "../store/feature/ui/uiSlice";
import { mockStore } from "./customRender";

export interface InitialPropsStructure {
  initialPath?: string;
  preloadedState?: PreloadedState<RootState>;
}

export interface ActivateCustumazerStructure {
  isMemoryRouter?: boolean;
  isProvider?: boolean;
}

const customRenderWithProviders = (
  children: React.ReactElement,
  activateCustumazer?: ActivateCustumazerStructure,
  initialProps?: InitialPropsStructure,
) => {
  const initialPropsDefault: InitialPropsStructure = {
    initialPath: "",
    preloadedState: {
      recordsState: { records: recordsMock },
      uiState: uiInitialState,
    },
  };

  const ActivateCustumazerDefault: ActivateCustumazerStructure = {
    isMemoryRouter: true,
    isProvider: true,
  };

  const { isMemoryRouter, isProvider } =
    activateCustumazer ?? ActivateCustumazerDefault;
  const { initialPath, preloadedState } = initialProps ?? initialPropsDefault;

  const base = (
    <Provider store={mockStore}>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  );

  const setProvide: React.ReactElement = isProvider ? (
    <Provider store={setupStore(preloadedState)}>{base}</Provider>
  ) : (
    base
  );

  const setMemoryRouter: React.ReactElement =
    isMemoryRouter ?? ActivateCustumazerDefault.isMemoryRouter ? (
      <MemoryRouter
        initialEntries={[initialPath ?? initialPropsDefault.initialPath!]}
      >
        {setProvide}
      </MemoryRouter>
    ) : (
      setProvide
    );

  return render(setMemoryRouter);
};

export default customRenderWithProviders;
