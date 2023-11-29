import { screen } from "@testing-library/react";
import Header from "./Header";
import customRender from "../../test-utils/customRender";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'myb box logo' accessible text", () => {
      const expectedLogoText = "my box logo";

      customRender(<Header />);

      const logoElement = screen.getByRole("img", { name: expectedLogoText });

      expect(logoElement).toBeInTheDocument();
    });
  });
});
