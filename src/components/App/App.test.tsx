import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import customRender from "../../test-utils/customRender";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";

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
    test("Then it should show a message 'Dame veneno' was deleted", async () => {
      customRender(<App />);

      const deleteButton = screen.getByRole("button", { name: "delete On" });

      await fireEvent.click(deleteButton);

      waitFor(async () =>
        expect(
          screen.getByText("'Dame veneno' was deleted ✅😍!"),
        ).toBeInTheDocument(),
      );
    });
  });

  describe("When it receives a path to /home", () => {
    test("Then it should show the title 'My records' into a heading", () => {
      const expectedTitle = "My records";

      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: { recordsState: { records: [] } },
      });
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});
