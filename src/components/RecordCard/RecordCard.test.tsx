import { screen, waitFor } from "@testing-library/react";
import recordsMock from "../../mocks/recordsMock";
import customRender from "../../test-utils/customRender";
import RecordCard from "./RecordCard";
import userEvent from "@testing-library/user-event";

describe("Given a RecordCard component", () => {
  describe("When it recieves the record of Los Chunguitos", () => {
    test("Then it should show 'Los chunguitos'", () => {
      const expectedHeadingTitle = "Los chunguitos";

      customRender(<RecordCard record={recordsMock[0]} />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });

    describe("When it's rendered and it's clicked", () => {
      test("Then it should show a button to modify that record", async () => {
        const expectedHeadingTitle = "Los chunguitos";

        customRender(<RecordCard record={recordsMock[0]} />);

        const element = screen.getByRole("heading", {
          name: expectedHeadingTitle,
        });

        await userEvent.click(element);

        await waitFor(() => {
          expect(
            screen.getByRole("img", { name: "modify On" }),
          ).toBeInTheDocument();
        });
      });
    });
  });
});
