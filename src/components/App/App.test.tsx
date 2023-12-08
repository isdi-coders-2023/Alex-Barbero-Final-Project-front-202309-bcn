import { fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import customRender from "../../test-utils/customRender";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import RecordStructure from "../../store/feature/records/types";
import userEvent from "@testing-library/user-event";
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/node";

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
        preloadedState: {
          recordsState: {
            records: [],
            currentDetailRecord: {} as RecordStructure,
          },
        },
      });
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });
});

describe("", () => {
  describe("When 'Los Chunguitos' card it's rendered and user clicks in button details", () => {
    test.only("It should show 'Record details' in a heading", async () => {
      customRender(<App />);
      server.use(...handlers);
      const detailsButtons = screen.getAllByRole("button", {
        name: "+",
      });

      await userEvent.click(detailsButtons[0]);

      const titleElement = screen.getByRole("heading", {
        name: "Record details",
      });

      await expect(titleElement).toBeInTheDocument();
    });
  });
});
