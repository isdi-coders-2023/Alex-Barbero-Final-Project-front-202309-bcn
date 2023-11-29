import { screen } from "@testing-library/react";
import Navigation from "./Navigation";
import customRender from "../../test-utils/customRender";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'go-home' accessible text", () => {
      const expectedImageText = "go-home";

      customRender(<Navigation />);

      const iconElement = screen.getByRole("link", { name: expectedImageText });

      expect(iconElement).toBeInTheDocument();
      expect(iconElement).toHaveAttribute("href", "/home");
    });
  });
});
