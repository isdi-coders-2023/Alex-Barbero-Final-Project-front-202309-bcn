import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RecordStructure from "./types";

export interface RecordsStateStructure {
  records: RecordStructure[];
}

export const recordsInitialState: RecordsStateStructure = { records: [] };

const recordsSlice = createSlice({
  name: "records",
  initialState: recordsInitialState,
  reducers: {
    loadRecords: (
      currentState: RecordsStateStructure,
      action: PayloadAction<RecordStructure[]>,
    ): RecordsStateStructure => ({
      ...currentState,
      records: action.payload,
    }),
    updateRecordState: (
      currentState: RecordsStateStructure,
      action: PayloadAction<string>,
    ): RecordsStateStructure => ({
      ...currentState,
      records: currentState.records.map((record) => ({
        ...record,
        isActive:
          record._id === action.payload ? !record.isActive : record.isActive,
      })),
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
  updateRecordState: updateRecordStateActionCreator,
} = recordsSlice.actions;

export const recordsReducer = recordsSlice.reducer;
