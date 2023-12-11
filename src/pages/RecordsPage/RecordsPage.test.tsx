import { screen } from "@testing-library/react";
import customRenderWithProviders from "../../test-utils/customRenderWithProviders";
import RecordsPage from "./RecordsPage";
import { undefinedHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";
import RecordStructure from "../../store/feature/records/types";
import App from "../../components/App/App";

describe("Given a RecordsPage", () => {
  describe("When recieves a list of Records", () => {
    test("It should show 'My records' in a heading", () => {
      const expectedHeadingText = "My records";

      customRenderWithProviders(<RecordsPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When it fails to recieve a list of records", () => {
    test("It should show 'Records not found!' in a toast", () => {
      server.use(...undefinedHandlers);

      customRenderWithProviders(<App />, {
        initialPath: "/home",
        preloadedState: {
          recordsState: {
            records: [],
            currentRecord: {} as RecordStructure,
          },
        },
      });

      const headingElement = screen.getByText("Records not found!");

      expect(headingElement).toBeInTheDocument();
    });
  });
});
