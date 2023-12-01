import { screen, waitFor } from "@testing-library/react";
import Navigation from "./Navigation";
import customRender from "../../test-utils/customRender";
import userEvent from "@testing-library/user-event";

describe("Given a Navigation component", () => {
  describe("When it's rendered", () => {
    customRender(<Navigation />);
    const iconElement = screen.getByRole("link", { name: "add new Off" });

    test("Then it should show an image with 'add new Off' accessible text", () => {
      expect(iconElement).toBeInTheDocument();
    });
  });

  describe("When it's rendered and we click on the add new record Icon", () => {
    test("Then it should show an image with 'add new On' accessible text", async () => {
      customRender(<Navigation />);

      userEvent.click(screen.getByRole("link", { name: "add new Off" }));

      await waitFor(() => {
        expect(
          screen.getByRole("link", { name: "add new On" }),
        ).toBeInTheDocument();
      });
    });
  });
});
