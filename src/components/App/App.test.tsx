import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import customRender from "../../test-utils/customRender";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import RecordStructure from "../../store/feature/records/types";
import userEvent from "@testing-library/user-event";
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/node";
import { undefinedHandlers } from "../../mocks/errorHandlers";
import { recordMockDetails, recordsMock } from "../../mocks/recordsMock";

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

      await userEvent.click(deleteButton);

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
            currentRecord: {} as RecordStructure,
          },
        },
      });
      const title = screen.getByRole("heading", { name: expectedTitle });

      expect(title).toBeInTheDocument();
    });
  });

  describe("When 'Los Chunguitos' card it's rendered and user clicks in button details", () => {
    test("It should show 'Record details' in a heading", async () => {
      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordMockDetails,
          },
        },
      });

      const detailButtonElements = screen.getAllByAltText("info On");
      await userEvent.click(detailButtonElements[0]);

      const titleElement = screen.getByRole("heading", {
        name: "Record details",
      });

      await expect(titleElement).toBeInTheDocument();
    });
  });

  describe("When 'Los Chunguitos' card it's rendered and user clicks in button details but it fails", () => {
    test("It should show 'New Records' in a heading", async () => {
      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordMockDetails,
          },
        },
      });

      server.use(...undefinedHandlers);

      const detailButtonElements = screen.getAllByAltText("info On");
      await userEvent.click(detailButtonElements[0]);

      const titleElement = screen.getByRole("heading", {
        name: "My records",
      });

      await expect(titleElement).toBeInTheDocument();
    });
  });

  describe("When 'Los Chunguitos' card it's rendered and user clicks in button modify", () => {
    test("Then it should show 'Modify Record' in a heading", async () => {
      const expectedHeadingText = "Modify Record";

      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordMockDetails,
          },
        },
      });

      const modifyButton = screen.getByRole("button", {
        name: "modify On",
      });

      await userEvent.click(modifyButton);

      const expectedHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      await expect(expectedHeadingElement).toBeInTheDocument();
    });
  });

  describe("When 'Los Chunguitos' Details page is rendered and user clicks in button modify Los Chunguitos", () => {
    test("It should show 'Modify Record' in a heading", async () => {
      const expectedHeadingText = "Modify Record";

      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordsMock[0],
          },
        },
      });

      const detailButtonElements = screen.getAllByAltText("info On");
      await userEvent.click(detailButtonElements[0]);

      const modifyButton = screen.getByAltText("modifyRecord");
      await userEvent.click(modifyButton);

      const expectedHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      await expect(expectedHeadingElement).toBeInTheDocument;
    });
  });

  describe("When 'Los Chunguitos' Details page is rendered and user clicks in the info button", () => {
    test("It should show 'Track list' in a heading", async () => {
      const expectedHeadingText = "Track list";
      server.use(...handlers);

      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordsMock[0],
          },
        },
      });

      const detailButtonElements = screen.getAllByAltText("info On");
      await userEvent.click(detailButtonElements[0]);

      const infoButton = screen.getByAltText("info On");
      await userEvent.click(infoButton);

      const expectedHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      await expect(expectedHeadingElement).toBeInTheDocument;
    });
  });
});
