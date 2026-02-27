import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with label", () => {
    render(<Switch label="Dark mode" />);
    expect(screen.getByLabelText("Dark mode")).toBeInTheDocument();
  });

  it("toggles on click", async () => {
    const onChange = vi.fn();
    render(<Switch label="Toggle" onChange={onChange} />);
    const input = screen.getByRole("switch");
    await userEvent.click(input);
    expect(onChange).toHaveBeenCalled();
    expect(input).toBeChecked();
  });

  it("renders disabled state", () => {
    render(<Switch label="Disabled" disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("supports size variants", () => {
    const { container } = render(<Switch label="Large" size="lg" />);
    expect(container.querySelector(".ui-switch")).toHaveClass("ui-switch--lg");
  });
});
