import { screen, waitFor } from "@testing-library/react";
import App from "../components/App/App";
import { errorHandlers } from "../mocks/errorHandlers";
import { server } from "../mocks/node";
import customRender from "../test-utils/customRender";
import userEvent from "@testing-library/user-event";

describe("Given a deleteRecords function", () => {
  describe("When it renders Los chunguitos and it's delete button is clicked but it fails", () => {
    test.only("Then it should show a message Impossible to delete 'Dame veneno'...", async () => {
      customRender(<App />);
      server.use(...errorHandlers);

      const deleteButton = screen.getByRole("button", { name: "delete On" });

      await userEvent.click(deleteButton);

      await waitFor(() =>
        expect(
          screen.getByText("Impossible to delete 'Dame veneno' ⛔😒..."),
        ).toBeInTheDocument(),
      );
    });
  });
});
