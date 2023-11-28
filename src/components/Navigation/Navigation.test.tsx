import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Navigation from "./Navigation";
import { BrowserRouter } from "react-router-dom";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'go-home' accessible text", () => {
      const expectedImageText = "go-home";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Navigation />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const iconElement = screen.getByRole("img", { name: expectedImageText });

      expect(iconElement).toBeInTheDocument();
    });
  });
});
