import { screen, waitFor } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import RecordsPage from "./RecordsPage";
import { undefinedHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";

describe("Given a RecordsPage", () => {
  describe("When recieves a list of Records", () => {
    test("It should show 'My records' in a heading", () => {
      const expectedHeadingText = "My records";

      customRenderWithProviders(<RecordsPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      waitFor(() => expect(headingElement).toBeInTheDocument());
    });
  });

  describe("When recieves a list of Records", () => {
    test("It should show 'My records' in a heading", () => {
      server.use(...undefinedHandlers);

      customRenderWithProviders(<RecordsPage />, {
        initialPath: "/home",
        preloadedState: { recordsState: { records: [] } },
      });

      const headingElement = screen.getByText("Records not found!");

      expect(headingElement).toBeInTheDocument();
    });
  });
});
