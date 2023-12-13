import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { server } from "../../mocks/node";
import { modifiedRecordMock, recordsMock } from "../../mocks/recordsMock";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import App from "./App";
import { handlers } from "../../mocks/handlers";

describe("Given an App component", () => {
  describe("When 'Los Chunguitos' card it's rendered and user clicks in button modify Los Chunguitos", () => {
    test("It should show 'New Records' in a heading", async () => {
      customRenderWithProviders(<App />, {
        initialPath: `/modify/${modifiedRecordMock._id}`,
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: modifiedRecordMock,
          },
        },
      });

      server.use(...handlers);

      const modifyButton = screen.getByRole("button", {
        name: "Modify",
      });

      await userEvent.click(modifyButton);

      const titleElement = screen.getByRole("heading", {
        name: "My records",
      });

      await expect(titleElement).toBeInTheDocument();
    });
  });
});
