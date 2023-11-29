import { screen } from "@testing-library/react";
import customRender from "../../test-utils/customRender";
import recordsMock from "../../mocks/recordsMock";
import RecordsList from "./RecordsList";

describe("Given a RecordsList component", () => {
  describe("When it recieves a list of records", () => {
    test("it should show 'band1", () => {
      const expectedHeadingTitle = "band1";
      customRender(<RecordsList records={recordsMock} />);

      const normieHeadingElement = screen.getByRole("heading", {
        name: expectedHeadingTitle,
      });

      expect(normieHeadingElement).toBeInTheDocument();
    });
  });
});
