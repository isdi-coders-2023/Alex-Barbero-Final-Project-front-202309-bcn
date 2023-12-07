import { renderHook } from "@testing-library/react";

import { errorHandlers } from "../mocks/errorHandlers";
import { server } from "../mocks/node";
import { providerWrapper } from "../test-utils/customRender";

import recordsMock from "../mocks/recordsMock";

import useRecordsApi from "./useRecordsApi";
import { store } from "../store";

describe("Given a deleteRecords function", () => {
  describe("When it renders Los chunguitos and it's delete button is clicked but it fails", () => {
    test("Then it should show a message Impossible to delete 'Dame veneno'...", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { deleteRecord },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      await deleteRecord(recordsMock[0]._id, recordsMock[0].albumName);

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe("Impossible to delete 'Dame veneno' ⛔😒...");
    });
  });
});
