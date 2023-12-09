import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";

import ModifyFormPage from "./ModifyFormPage";

describe("Given a ModifyRecordPage", () => {
  describe("When it's rendered", () => {
    test("It should show 'Record details' in a heading", () => {
      const expectedHeadingText = "Modify Record";

      customRenderWithProviders(<ModifyFormPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });
});
