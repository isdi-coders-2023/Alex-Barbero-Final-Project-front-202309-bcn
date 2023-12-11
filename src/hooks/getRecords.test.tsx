import { renderHook } from "@testing-library/react";
import { recordsMock } from "../mocks/recordsMock";
import useRecordsApi from "./useRecordsApi";
import { server } from "../mocks/node";
import { errorHandlers, undefinedHandlers } from "../mocks/errorHandlers";
import { providerWrapper } from "../test-utils/customRender";
import RecordStructure from "../store/feature/records/types";

describe("Given a custom hook", () => {
  describe("When it fetches Records from the API", () => {
    test("It should return some Records", async () => {
      const expectedRecords: RecordStructure[] = recordsMock;

      const {
        result: {
          current: { getRecords },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const records = await getRecords();

      expect(records).toStrictEqual(expectedRecords);
    });
  });

  describe("When it recives undefined", () => {
    test("It should return no records", async () => {
      server.use(...undefinedHandlers);

      const {
        result: {
          current: { getRecords },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const record = await getRecords();

      expect(record).toStrictEqual(undefined);
    });
  });

  describe("When it recives undefined", () => {
    test("It should return no records", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getRecords },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      const record = await getRecords();

      expect(record).toStrictEqual(undefined);
    });
  });
});
