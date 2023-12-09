import { fireEvent, screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import RecordsForm from "./RecordsForm";
import userEvent from "@testing-library/user-event";
import { errorHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";

describe("Given a RecordsForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it's rendered' ", () => {
    test("It should show 'Create new Record' in a Button", async () => {
      const expectedButtonText = "Create new Record";

      customRender(<RecordsForm submitAction={actionOnClick} />);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });

    test("It should show some empty inputs", async () => {
      customRender(<RecordsForm submitAction={actionOnClick} />);

      const textElements = screen.getAllByDisplayValue("");

      expect(textElements[0]).toBeInTheDocument();
    });
  });

  describe("When it's rendered and user types Holita ", () => {
    test("It should show 'Holita' inside an input", async () => {
      const expectedInputText = "Holita";

      customRender(<RecordsForm submitAction={actionOnClick} />);

      const inputElement = screen.getByLabelText("Band name:");

      await userEvent.type(inputElement, expectedInputText);

      const textElement = screen.getByDisplayValue(expectedInputText);

      expect(textElement).toBeInTheDocument();
    });
  });

  describe("When its create new Record is clicked ", () => {
    test("It should call the onSubmit function", async () => {
      server.use(...errorHandlers);

      customRender(<RecordsForm submitAction={actionOnClick} />);

      const formElement = screen.getByRole("form", { name: "form" });

      fireEvent.submit(formElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });

  describe("When it's rendered and user types something in every input ", () => {
    test("It should let the submit button to be clicked", async () => {
      const expectedInputText = "Holita";
      const expectedButtonText = "Create new Record";

      customRender(<RecordsForm submitAction={actionOnClick} />);

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

      await expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
