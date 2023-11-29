import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { recordsReducer } from "../../store/feature/records/recordsSlice";
import recordsMock from "./recordsMock";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      recordsState: recordsReducer,
    },
    preloadedState: { recordsState: { records: recordsMock } },
  });
  render(
    <Provider store={mockStore}>
      <BrowserRouter>
        <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>
      </BrowserRouter>
    </Provider>,
  );
};

export default customRender;
