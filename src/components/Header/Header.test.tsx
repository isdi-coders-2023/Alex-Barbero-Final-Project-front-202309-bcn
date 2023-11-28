import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import mainTheme from "../../styles/mainTheme";
import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'my-box-logo' accessible text", () => {
      const expectedLogoText = "my-box-logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const logoElement = screen.getByTitle(expectedLogoText);

      expect(logoElement).toBeInTheDocument();
    });
  });
});
