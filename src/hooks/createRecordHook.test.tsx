import { renderHook } from "@testing-library/react";
import { errorHandlers } from "../mocks/errorHandlers";
import { server } from "../mocks/node";
import { recordMockWithouId } from "../mocks/recordsMock";
import { store } from "../store";
import { providerWrapper } from "../test-utils/customRender";
import useRecordsApi from "./useRecordsApi";

describe("Given a addNewRecords function", () => {
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
