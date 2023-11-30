import recordsMock from "../../../mocks/recordsMock";
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
      const currentState: RecordsStateStructure = { records: [] };

      const loadedRecords = recordsReducer(
        currentState,
        loadRecordsActionCreator(recordsMock),
      );

      expect(loadedRecords).toStrictEqual(expectedLoadedRecords);
    });
  });
});
