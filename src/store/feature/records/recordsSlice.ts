import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import RecordStructure from "./types";

export interface RecordsStateStructure {
  records: RecordStructure[];
  currentDetailRecord: RecordStructure;
}

export type RecordsAxiosResponse = RecordStructure | undefined;

export const recordsInitialState: RecordsStateStructure = {
  records: [],
  currentDetailRecord: {
    _id: "",
    albumName: "",
    backCover: "",
    bandName: "",
    cookieImage: "",
    description: "",
    frontCover: "",
    printImage: "",
    trackList: "",
  },
};

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
    addNewRecord: (
      currentState: RecordsStateStructure,
      action: PayloadAction<RecordStructure>,
    ): RecordsStateStructure => ({
      ...currentState,
      records: [...currentState.records, action.payload],
    }),
    updateCurrentRecord: (
      currentState: RecordsStateStructure,
      action: PayloadAction<RecordStructure>,
    ): RecordsStateStructure => ({
      ...currentState,
      currentDetailRecord: action.payload,
    }),
  },
});

export const {
  loadRecords: loadRecordsActionCreator,
  deleteRecord: deleteRecordActionCreator,
  updateRecordState: updateRecordStateActionCreator,
  addNewRecord: addNewRecordActionCreator,
  updateCurrentRecord: updateCurrentRecordActionCreator,
} = recordsSlice.actions;

export const recordsReducer = recordsSlice.reducer;
