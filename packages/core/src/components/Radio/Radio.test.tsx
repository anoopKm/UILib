import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Radio, RadioGroup } from "./Radio";

describe("Radio", () => {
  it("renders radio with label", () => {
    render(<Radio label="Option A" name="test" value="a" />);
    expect(screen.getByLabelText("Option A")).toBeInTheDocument();
  });

  it("handles selection", async () => {
    const onChange = vi.fn();
    render(<Radio label="Option A" name="test" value="a" onChange={onChange} />);
    await userEvent.click(screen.getByLabelText("Option A"));
    expect(onChange).toHaveBeenCalled();
  });
});

describe("RadioGroup", () => {
  it("renders group with radios", () => {
    render(
      <RadioGroup name="color" value="red">
        <Radio label="Red" value="red" />
        <Radio label="Blue" value="blue" />
      </RadioGroup>,
    );
    expect(screen.getByLabelText("Red")).toBeChecked();
    expect(screen.getByLabelText("Blue")).not.toBeChecked();
  });

  it("calls onChange when radio selected", async () => {
    const onChange = vi.fn();
    render(
      <RadioGroup name="color" value="red" onChange={onChange}>
        <Radio label="Red" value="red" />
        <Radio label="Blue" value="blue" />
      </RadioGroup>,
    );
    await userEvent.click(screen.getByLabelText("Blue"));
    expect(onChange).toHaveBeenCalledWith("blue");
  });
});
