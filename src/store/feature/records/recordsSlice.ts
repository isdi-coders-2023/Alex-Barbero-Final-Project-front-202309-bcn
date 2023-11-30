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
  },
});

export const { loadRecords: loadRecordsActionCreator } = recordsSlice.actions;

export const recordsReducer = recordsSlice.reducer;
