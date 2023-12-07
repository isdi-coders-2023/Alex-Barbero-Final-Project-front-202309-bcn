import { renderHook } from "@testing-library/react";
import { recordsMock } from "../mocks/recordsMock";
import RecordStructure from "../store/feature/records/types";
import { providerWrapper } from "../test-utils/customRender";
import useRecordsApi from "./useRecordsApi";
import { errorHandlers, undefinedHandlers } from "../mocks/errorHandlers";
import { server } from "../mocks/node";

describe("Given a getrecordById custom hook", () => {
  describe("When it recives a record Id", () => {
    test("It should return that Record", async () => {
      const expectedRecord: RecordStructure = recordsMock[0];

      const {
        result: {
          current: { getRecordById },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const record = await getRecordById(recordsMock[0]._id);

      expect(record).toStrictEqual(expectedRecord);
    });
  });

  describe("When it recives an Id but the server fails", () => {
    test("It should return no records", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getRecordById },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const record = await getRecordById(recordsMock[0]._id);

      expect(record).toStrictEqual(undefined);
    });
  });

  describe("When it recives an invalid record Id", () => {
    test("It should return that Record", async () => {
      server.use(...undefinedHandlers);

      const {
        result: {
          current: { getRecordById },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const record = await getRecordById(recordsMock[0]._id);

      expect(record).toStrictEqual(undefined);
    });
  });
});
