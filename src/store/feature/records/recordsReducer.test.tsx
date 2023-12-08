import { recordsMock } from "../../../mocks/recordsMock";
import {
  RecordsStateStructure,
  loadRecordsActionCreator,
  recordsReducer,
  updateCurrentRecordActionCreator,
} from "./recordsSlice";
import RecordStructure from "./types";

describe("Given a recordsReducer", () => {
  describe("When it recives the action to load a list of Records to and empty list", () => {
    test("Then it should update the list with the records", () => {
      const expectedLoadedRecords: RecordsStateStructure = {
        records: recordsMock,
        currentDetailRecord: {} as RecordStructure,
      };
      const currentState: RecordsStateStructure = {
        records: [],
        currentDetailRecord: {} as RecordStructure,
      };

      const loadedRecords = recordsReducer(
        currentState,
        loadRecordsActionCreator(recordsMock),
      );

      expect(loadedRecords).toStrictEqual(expectedLoadedRecords);
    });
  });

  describe("When it recives the action to update the detailed Record", () => {
    test.only("Then it should update the state with that Record", () => {
      const expectedUpdatedRecordsState: RecordsStateStructure = {
        records: recordsMock,
        currentDetailRecord: recordsMock[0],
      };

      const currentState: RecordsStateStructure = {
        records: [],
        currentDetailRecord: {} as RecordStructure,
      };

      const newRecordState = recordsReducer(
        currentState,
        updateCurrentRecordActionCreator(recordsMock[0]),
      );

      expect(newRecordState.currentDetailRecord).toStrictEqual(
        expectedUpdatedRecordsState.currentDetailRecord,
      );
    });
  });
});
