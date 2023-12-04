import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { recordsReducer } from "./feature/records/recordsSlice";
import { uiReducer } from "./feature/ui/uiSlice";

export const rootReducer = combineReducers({
  recordsState: recordsReducer,
  uiState: uiReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
