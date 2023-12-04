import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "../store";

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
