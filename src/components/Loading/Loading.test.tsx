import { screen } from "@testing-library/react";

import Loading from "./Loading";
import customRender from "../../test-utils/customRender";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Loading...' in a heading", () => {
      customRender(<Loading />);

      const expectedText = "Loading...";

      const loadingElement = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(loadingElement).toBeInTheDocument();
    });
  });
});
