import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RecordStructure from "./types";

export interface RecordsStateStructure {
  records: RecordStructure[];
}

const initialState: RecordsStateStructure = { records: [] };

const recordsSlice = createSlice({
  name: "records",
  initialState: initialState,
  reducers: {
    loadRecords: (
      currentState: RecordsStateStructure,
      action: PayloadAction<RecordStructure[]>,
    ): RecordsStateStructure => ({
      ...currentState,
      records: action.payload,
    }),
    deleteRecord: (
      currentState: RecordsStateStructure,
      action: PayloadAction<string>,
    ): RecordsStateStructure => ({
      ...currentState,
      records: currentState.records.filter(
        (record) => record._id !== action.payload,
      ),
    }),
  },
});

export const {
  loadRecords: loadRecordsActionCreator,
  deleteRecord: deleteRecordActionCreator,
} = recordsSlice.actions;

export const recordsReducer = recordsSlice.reducer;
