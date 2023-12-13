import { screen } from "@testing-library/react";
import CreateFormPage from "./CreateFormPage";
import userEvent from "@testing-library/user-event";
import { store } from "../../store";
import customRender from "../../test-utils/customRender";

describe("Given a RecordsFormPage", () => {
  describe("When it's rendered", () => {
    test("It should show 'Create new record' in a heading", () => {
      const expectedHeadingText = "Add a new Record";

      customRender(<CreateFormPage />);

      const headingElement = screen.getByRole("heading", {
        name: expectedHeadingText,
      });

      expect(headingElement).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user types something in every input and clicks the submit button ", () => {
    test("It should show 'Album-name of banda-name' was created ✅😍! in a toast ", async () => {
      const expectedInputText = "Holita";
      const expectedButtonText = "Create new Record";

      customRender(<CreateFormPage />);

      const labels = [
        "Band name:",
        "Record name:",
        "Front cover image:",
        "Back cover image:",
        "Insert image:",
        "Label cookie image:",
        "Description:",
        "Track list:",
      ];

      for (const labelText of labels) {
        const inputBandElement = screen.getByLabelText(labelText);
        await userEvent.type(inputBandElement, expectedInputText);
      }

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      await userEvent.click(formButtonElement);

      const updatedMessage = store.getState().uiState.feedbackToast.message;

      expect(updatedMessage).toBe("'Holita of Holita' was created ✅😍!");
    });
  });
});
