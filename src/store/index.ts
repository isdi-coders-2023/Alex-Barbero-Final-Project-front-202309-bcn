import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { recordsReducer } from "./feature/records/recordsSlice";

export const store = configureStore({
  reducer: {
    recordsState: recordsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
