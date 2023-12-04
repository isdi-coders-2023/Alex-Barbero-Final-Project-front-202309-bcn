import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import RecordsPage from "./RecordsPage";

describe("Given a RecordsPage", () => {
  describe("When recieves a list of Records", () => {
    test("It should show 'My records' in a heading", () => {
      const expectedHeadingText = "My records";

      customRenderWithProviders(<RecordsPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
