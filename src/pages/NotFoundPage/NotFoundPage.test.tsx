import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When rendered", () => {
    test("It should show 'Ouch! 404 page not found...' in a heading", () => {
      const expectedHeadingText = "Ouch! 404 page not found...";

      customRenderWithProviders(<NotFoundPage />);

      const headingElement = screen.getByText(expectedHeadingText);

      expect(headingElement).toBeInTheDocument();
    });
  });
});
