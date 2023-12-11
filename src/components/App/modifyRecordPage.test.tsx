import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import { server } from "../../mocks/node";
import { recordsMock } from "../../mocks/recordsMock";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import App from "./App";
import { handlers } from "../../mocks/handlers";
import { errorHandlers } from "../../mocks/errorHandlers";

describe("Given an App component", () => {
  describe("When 'Los Chunguitos' card it's rendered and user clicks in button modify Los Chunguitos", () => {
    test("It should show 'New Records' in a heading", async () => {
      customRenderWithProviders(<App />, {
        initialPath: "/modify",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordsMock[0],
          },
        },
      });

      server.use(...handlers);

      const modifyButton = screen.getByRole("button", {
        name: "Modify Los chunguitos's Record",
      });

      await userEvent.click(modifyButton);

      const titleElement = screen.getByRole("heading", {
        name: "My records",
      });

      await expect(titleElement).toBeInTheDocument();
    });
  });

  describe("When 'Los Chunguitos' card it's rendered and user clicks in button modify Los Chunguitos but it fails", () => {
    test("It should update the feedBack message with 'Impossible to modify 'Dame veneno of Los chunguitos' ⛔😒...'", async () => {
      customRenderWithProviders(<App />, {
        initialPath: "/modify",
        preloadedState: {
          recordsState: {
            records: recordsMock,
            currentRecord: recordsMock[0],
          },
        },
      });

      server.use(...errorHandlers);

      const modifyButton = screen.getByRole("button", {
        name: "Modify Los chunguitos's Record",
      });

      await userEvent.click(modifyButton);

      const titleElement = screen.getByText(
        "Impossible to modify 'Dame veneno of Los chunguitos' ⛔😒...",
      );

      expect(titleElement).toBeInTheDocument();
    });
  });
});
