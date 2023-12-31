import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FeedbackToastStructure {
  message: string;
  type: "error" | "success" | "off";
}
export interface UiStateStructure {
  isLoading: boolean;
  feedbackToast: FeedbackToastStructure;
}

export const uiInitialState: UiStateStructure = {
  isLoading: false,
  feedbackToast: { message: "", type: "off" },
};

const uiSlice = createSlice({
  name: "ui",
  initialState: uiInitialState,
  reducers: {
    showLoading: (currentUistate: UiStateStructure) => ({
      ...currentUistate,
      isLoading: true,
    }),
    hideLoading: (currentUistate: UiStateStructure) => ({
      ...currentUistate,
      isLoading: false,
    }),
    updateToast: (
      currentUistate: UiStateStructure,
      action: PayloadAction<FeedbackToastStructure>,
    ) => ({
      ...currentUistate,
      feedbackToast: {
        message: action.payload.message,
        type: action.payload.type,
      },
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  updateToast: updateToastActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
