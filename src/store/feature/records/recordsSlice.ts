import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import recordStructure from "./types";

export interface RecordsStateStructure {
  records: recordStructure[];
}

const initialState: RecordsStateStructure = { records: [] };

const recordsSlice = createSlice({
  name: "records",
  initialState: initialState,
  reducers: {
    loadRecords: (
      currentState: RecordsStateStructure,
      action: PayloadAction<recordStructure[]>,
    ): RecordsStateStructure => ({
      ...currentState,
      records: action.payload,
    }),
  },
});

export const { loadRecords: loadRecordsActionCreator } = recordsSlice.actions;

export const recordsReducer = recordsSlice.reducer;
