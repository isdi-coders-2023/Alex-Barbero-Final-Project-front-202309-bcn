import { screen } from "@testing-library/react";
import RecordsList from "./RecordsList";
import customRender from "../../test-utils/customRender";

describe("Given a RecordsList component", () => {
  describe("When it recieves a list of records", () => {
    test("Then it should show 'Los chunguitos'", () => {
      const expectedHeadingTitle = "Los chunguitos";
      customRender(<RecordsList />);

      const recordHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(recordHeadingElement).toBeInTheDocument();
    });
  });
});
