import { renderHook, screen, waitFor } from "@testing-library/react";
import { errorHandlers } from "../mocks/errorHandlers";
import { server } from "../mocks/node";
import { recordMockWithouId } from "../mocks/recordsMock";
import { store } from "../store";
import { providerWrapper } from "../test-utils/customRender";
import useRecordsApi from "./useRecordsApi";
import customRenderWithProviders from "../test-utils/customRenderWithProviders";
import App from "../components/App/App";
import RecordStructure from "../store/feature/records/types";

describe("Given a addNewRecords function", () => {
  describe("When user enters the new Record data and create button is clicked", () => {
    test("Then it should show a message 'New record was created!'...", async () => {
      const {
        result: {
          current: { addNewRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      customRenderWithProviders(<App />, {
        preloadedState: {
          recordsState: {
            records: [],
            currentRecord: {} as RecordStructure,
          },
          uiState: {
            feedbackToast: { type: "success", message: "" },
            isLoading: true,
          },
        },
        initialPath: "/add",
      });

      await addNewRecord(recordMockWithouId);

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe(
        "'Ave Maria of David bisbal' was created ✅😍!",
      );
    });
  });

  describe("When user enters the new Record data and create button is clicked", () => {
    test("Then it should show a message 'New record was created!'...", async () => {
      const {
        result: {
          current: { addNewRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      customRenderWithProviders(<App />, {
        preloadedState: {
          recordsState: {
            records: [],
            currentRecord: {} as RecordStructure,
          },
          uiState: {
            feedbackToast: { type: "success", message: "" },
            isLoading: true,
          },
        },
        initialPath: "/add",
      });

      await addNewRecord(recordMockWithouId);

      const toastElement = screen.getByText("Loading...");
      waitFor(() => expect(toastElement).toBeInTheDocument());
    });
  });

  describe("When it renders Los chunguitos and it's addNew button is clicked but it fails", () => {
    test("Then it should show a message Impossible to Create 'Dame veneno'...", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { addNewRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      await addNewRecord(recordMockWithouId);

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe(
        "Impossible to create 'Ave Maria of David bisbal' ⛔😒...",
      );
    });
  });
});
