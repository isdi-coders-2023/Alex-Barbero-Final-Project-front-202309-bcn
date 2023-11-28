import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import "@testing-library/jest-dom";

import App from "./App";
import mainTheme from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'My records' in it", async () => {
      const expectedHeadingText = "My records";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const headingElement = screen.getByText(expectedHeadingText);

      expect(await headingElement).toBeInTheDocument();
    });
  });
});
