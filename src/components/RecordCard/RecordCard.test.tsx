import { screen, waitFor } from "@testing-library/react";
import { recordsMock } from "../../mocks/recordsMock";
import RecordCard from "./RecordCard";
import userEvent from "@testing-library/user-event";
import * as dispatcher from "../../store/hooks";
import customRender from "../../test-utils/customRender";

beforeEach(() => {
  vi.clearAllMocks();
});

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

  describe("When 'Los Chunguitos' card it's rendered and user clicks in button delete", () => {
    test("the user shouldn't see that card anymore", async () => {
      const spyDispatch = vitest.spyOn(dispatcher, "useAppDispatch");

      const dispatch = vitest.fn();

      spyDispatch.mockReturnValue(dispatch);

      const losChunguitos = recordsMock[0];

      customRender(<RecordCard record={losChunguitos} />);

      const deleteButton = screen.getByRole("button", { name: "delete On" });

      await userEvent.click(deleteButton);

      waitFor(() => {
        expect(dispatch).toHaveBeenCalled();
      });

      spyDispatch.mockClear();
    });

    test("the user shouldn't see that card anymore", async () => {
      const losChunguitos = recordsMock[0];

      customRender(<RecordCard record={losChunguitos} />);

      const deleteButton = screen.getByRole("button", {
        name: "delete On",
      });

      await userEvent.click(deleteButton);

      const losChungitosElement = screen.getByRole("heading", {
        name: losChunguitos.bandName,
      });

      waitFor(() => {
        expect(losChungitosElement).not.toBeInTheDocument();
      });
    });
  });
});
