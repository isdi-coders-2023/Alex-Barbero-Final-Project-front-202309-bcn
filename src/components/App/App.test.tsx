import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import customRender from "../../mocks/utils/customRender";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'My records' in it", async () => {
      const expectedHeadingText = "My records";

      customRender(<App />);

      const headingElement = screen.getByText(expectedHeadingText);

      expect(await headingElement).toBeInTheDocument();
    });
  });
});
