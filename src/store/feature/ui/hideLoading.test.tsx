import {
  UiStateStructure,
  hideLoadingActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a hideLoading uiReducer", () => {
  describe("When it recives the action hide the Loading", () => {
    test("Then it should change the Loading state into false", () => {
      const expectedIsLoading: UiStateStructure = {
        isLoading: false,
        feedbackToast: { message: "", type: "off" },
      };

      const currentState: UiStateStructure = {
        isLoading: true,
        feedbackToast: { message: "", type: "off" },
      };

      const isLoadingState = uiReducer(
        currentState,
        hideLoadingActionCreator(),
      );

      expect(isLoadingState).toStrictEqual(expectedIsLoading);
    });
  });
});
