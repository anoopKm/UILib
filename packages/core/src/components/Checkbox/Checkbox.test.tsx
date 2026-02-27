import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Checkbox } from "./Checkbox";

describe("Checkbox", () => {
  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByLabelText("Accept terms")).toBeInTheDocument();
  });

  it("handles check/uncheck", async () => {
    const onChange = vi.fn();
    render(<Checkbox label="Toggle" onChange={onChange} />);
    const input = screen.getByLabelText("Toggle");
    await userEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    expect(input).toBeChecked();
  });

  it("renders disabled state", () => {
    render(<Checkbox label="Disabled" disabled />);
    expect(screen.getByLabelText("Disabled")).toBeDisabled();
  });

  it("supports size variants", () => {
    const { container } = render(<Checkbox label="Small" size="sm" />);
    expect(container.querySelector(".ui-checkbox")).toHaveClass("ui-checkbox--sm");
  });
});
