import { screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When rendered", () => {
    test("It should show 'Ouch! 404 page not found...' in a heading", () => {
      const expectedHeadingText = "Ouch! 404 page not found...";

      customRender(<NotFoundPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
