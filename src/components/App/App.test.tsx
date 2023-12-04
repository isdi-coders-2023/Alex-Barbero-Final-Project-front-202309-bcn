import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import customRender from "../../test-utils/customRender";

afterEach(() => {
  vi.clearAllMocks();
});

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should show a heading with the text 'My records' in it", async () => {
      const expectedHeadingText = "My records";

      customRender(<App />);

      const headingElement = screen.getByText(expectedHeadingText);

      expect(await headingElement).toBeInTheDocument();
    });
  });

  describe("When it renders Los chunguitos and it's delete button is clickedd", () => {
    test("Then it should stop showing that record", async () => {
      customRender(<App />);

      const deleteButton = screen.getByRole("button", { name: "delete On" });

      await fireEvent.click(deleteButton);

      const promise = new Promise((resolve) => {
        setTimeout(() => resolve("done"), 50);
      });
      await promise;

      await waitFor(() =>
        expect(
          screen.getByText("'Dame veneno' was deleted ✅😍!"),
        ).toBeInTheDocument(),
      );
    });
  });
});
