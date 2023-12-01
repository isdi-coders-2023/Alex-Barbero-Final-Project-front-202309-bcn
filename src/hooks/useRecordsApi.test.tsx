import { renderHook } from "@testing-library/react";
import recordsMock from "../mocks/recordsMock";
import useRecordsApi from "./useRecordsApi";
import { RecordsStateStructure } from "../store/feature/records/recordsSlice";

describe("Given a custom hook", () => {
  describe("When it fetches Records from the API", () => {
    test("It should return some Records", async () => {
      const expectedRecords: RecordsStateStructure = { records: recordsMock };

      const { result } = renderHook(() => useRecordsApi());

      const getRecords = async () => {
        const records = await result.current.getRecords();

        return records;
      };

      const records = await getRecords();

      expect(records).toStrictEqual(expectedRecords);
    });
  });
});
