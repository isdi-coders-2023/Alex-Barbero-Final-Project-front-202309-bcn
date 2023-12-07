import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import RecordsFormPage from "./RecordsFormPage";

describe("Given a RecordsFormPage", () => {
  describe("When it's rendered", () => {
    test("It should show 'Create new record' in a heading", () => {
      const expectedHeadingText = "Add a new Record";

      customRenderWithProviders(<RecordsFormPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
