import { act, renderHook } from "@testing-library/react";
import recordsMock from "../mocks/recordsMock";
import useRecordsApi from "./useRecordsApi";
import { RecordsStateStructure } from "../store/feature/records/recordsSlice";
import { providerWrapper } from "../test-utils/customRender";
import { server } from "../mocks/node";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

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

    test("It should return no records at all", async () => {
      const apiUrl = import.meta.env.VITE_API_URL;

      server.close();

      const errorServer = setupServer(
        http.get(`${apiUrl}/records`, async () => {
          return new HttpResponse(null, { status: 401 });
        }),
      );

      errorServer.listen();

      const {
        result: {
          current: { getRecords },
        },
      } = renderHook(() => useRecordsApi(), { wrapper: providerWrapper });

      act(async () => {
        await getRecords();
      });

      await expect(() => getRecords()).rejects.toThrowError();

      errorServer.close();
    });
  });
});
