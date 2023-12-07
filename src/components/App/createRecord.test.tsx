import { renderHook } from "@testing-library/react";
import useRecordsApi from "../../hooks/useRecordsApi";
import { recordMockWithouId } from "../../mocks/recordsMock";
import { store } from "../../store";
import customRender, { providerWrapper } from "../../test-utils/customRender";
import { RecordStructureWithoutId } from "../../store/feature/records/types";
import { errorHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";
import App from "./App";

describe("Given a addNewRecords function", () => {
  describe("When it recives David Bisbal and the addNew button is clicked", () => {
    test("Then it should update the toast message with 'Ave Maria of David bisbal was created", async () => {
      const {
        result: {
          current: { addNewRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      await addNewRecord(recordMockWithouId);

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe(
        "'Ave Maria of David bisbal' was created ✅😍!",
      );
    });
  });

  describe("When it recieves the David bisbal data the addNew button is clicked", () => {
    test("Then it should update the toast with 'Impossible to create 'Ave Maria of David bisbal'", async () => {
      customRender(<App />);
      server.use(...errorHandlers);
      const {
        result: {
          current: { addNewRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      await addNewRecord(recordMockWithouId as RecordStructureWithoutId);

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe(
        "Impossible to create 'Ave Maria of David bisbal' ⛔😒...",
      );
    });
  });
});
