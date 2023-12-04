import {
  UiStateStructure,
  showLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a showLoading uiReducer", () => {
  describe("When it recives the action show the Loading", () => {
    test("Then it should change the Loading state into true", () => {
      const expectedIsLoading: UiStateStructure = {
        isLoading: true,
        feedbackToast: { message: "", type: "off" },
      };

      const currentState: UiStateStructure = {
        isLoading: false,
        feedbackToast: { message: "", type: "off" },
      };

      const isLoadingState = uiReducer(
        currentState,
        showLoadingActionCreator(),
      );

      expect(isLoadingState).toStrictEqual(expectedIsLoading);
    });
  });
});
