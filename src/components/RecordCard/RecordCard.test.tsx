import { screen } from "@testing-library/react";
import recordsMock from "../../mocks/recordsMock";
import customRender from "../../test-utils/customRender";
import RecordCard from "./RecordCard";

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
  });
});
