import { screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import RecordsList from "./RecordsList";

describe("Given a RecordsList component", () => {
  describe("When it recieves a list of records", () => {
    test("Then it should show 'Los chunguitos'", () => {
      const expectedHeadingTitle = "Los chunguitos";
      customRender(<RecordsList />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
