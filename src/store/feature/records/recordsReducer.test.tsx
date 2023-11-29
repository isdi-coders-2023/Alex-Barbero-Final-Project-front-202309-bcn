import recordsMock from "../../../mocks/utils/recordsMock";
import {
  RecordsStateStructure,
  loadRecordsActionCreator,
  recordsReducer,
} from "./recordsSlice";

describe("Given a recordsReducer", () => {
  describe("When it recives the action to load a list of Records to and empty list", () => {
    test("Then it should update the list with the records", () => {
      const expectedLoadedRecords: RecordsStateStructure = {
        records: recordsMock,
      };
      const previousState: RecordsStateStructure = { records: [] };

      const loadedRecords = recordsReducer(
        previousState,
        loadRecordsActionCreator(recordsMock),
      );

      expect(loadedRecords).toStrictEqual(expectedLoadedRecords);
    });
  });
});
