import { renderHook, waitFor } from "@testing-library/react";
import recordsMock from "../mocks/recordsMock";
import useRecordsApi from "./useRecordsApi";
import { RecordsStateStructure } from "../store/feature/records/recordsSlice";
import * as dispatcher from "../store/hooks";
import { server } from "../mocks/node";
import { errorHandlers } from "../mocks/errorHandlers";
import App from "../components/App/App";
import customRender, { providerWrapper } from "../test-utils/customRender";

describe("Given a custom hook", () => {
  describe("When it fetches Records from the API", () => {
    test("It should return some Records", async () => {
      const expectedRecords: RecordsStateStructure = { records: recordsMock };

      const {
        result: {
          current: { getRecords },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const records = await getRecords();

      expect(records).toStrictEqual(expectedRecords);
    });
  });

  describe("When there's and error when fetching record", () => {
    test("It should return no records at all", async () => {
      server.use(...errorHandlers);

      const spyDispatch = vitest.spyOn(dispatcher, "useAppDispatch");

      const dispatch = vitest.fn();

      spyDispatch.mockReturnValue(dispatch);

      customRender(<App />);

      waitFor(() => {
        expect(dispatch).toHaveBeenCalled();
      });

      spyDispatch.mockClear();
    });
  });
});
