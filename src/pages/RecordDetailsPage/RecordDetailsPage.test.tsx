import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";

import RecordDetailsPage from "./RecordDetailsPage";

describe("Given a RecordDetailPage", () => {
  describe("When it's rendered", () => {
    test("It should show 'Record details' in a heading", () => {
      const expectedHeadingText = "Record details";

      customRenderWithProviders(<RecordDetailsPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
