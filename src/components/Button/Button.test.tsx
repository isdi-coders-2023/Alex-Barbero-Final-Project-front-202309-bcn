import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  const text = "test";
  const actionOnClick = vi.fn();

  describe("When it receives a text 'Test'", () => {
    test("Then it should show a button with 'Test' inside", async () => {
      render(<Button type="button" text={text} className={""} />);

      const buttonElement = screen.getByRole("button", { name: text });

      expect(buttonElement).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      render(
        <Button
          type="button"
          actionOnClick={actionOnClick}
          text={text}
          className={""}
        />,
      );

      const buttonElement = screen.getByRole("button", { name: text });

      await userEvent.click(buttonElement);

      expect(actionOnClick).toHaveBeenCalled();
    });
  });
});
