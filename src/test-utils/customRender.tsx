import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../styles/mainTheme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { recordsReducer } from "../store/feature/records/recordsSlice";
import recordsMock from "../mocks/recordsMock";
import GlobalStyle from "../styles/GlobalStyle";
import { uiReducer } from "../store/feature/ui/uiSlice";
import { PropsWithChildren } from "react";

const mockStore = configureStore({
  reducer: {
    recordsState: recordsReducer,
    uiState: uiReducer,
  },
  preloadedState: {
    recordsState: { records: recordsMock },
    uiState: { isLoading: false },
  },
});

const customRender = (children: React.ReactElement) => {
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

export const providerWrapper = ({ children }: PropsWithChildren) => {
  return <Provider store={mockStore}>{children}</Provider>;
};

export default customRender;
