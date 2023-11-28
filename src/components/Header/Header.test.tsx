import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'my-box-logo' accessible text", () => {
      const expectedLogoText = "my-box-logo";

      render(
        <BrowserRouter>
          <ThemeProvider theme={mainTheme}>
            <Header />
          </ThemeProvider>
        </BrowserRouter>,
      );

      const logoElement = screen.getByRole("img", { name: expectedLogoText });

      expect(logoElement).toBeInTheDocument();
    });
  });
});
