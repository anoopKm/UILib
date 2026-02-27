import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Select } from "./Select";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
];

describe("Select", () => {
  it("renders with placeholder", () => {
    render(<Select options={options} placeholder="Pick a framework" />);
    expect(screen.getByText("Pick a framework")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Select options={options} label="Framework" />);
    expect(screen.getByText("Framework")).toBeInTheDocument();
  });

  it("opens dropdown on click", async () => {
    render(<Select options={options} />);
    await userEvent.click(screen.getByRole("combobox"));
    expect(screen.getByRole("listbox")).toBeInTheDocument();
    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("selects an option", async () => {
    const onChange = vi.fn();
    render(<Select options={options} onChange={onChange} />);
    await userEvent.click(screen.getByRole("combobox"));
    await userEvent.click(screen.getByText("Vue"));
    expect(onChange).toHaveBeenCalledWith("vue");
  });

  it("renders error state", () => {
    render(<Select options={options} error errorMessage="Required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
  });

  it("renders disabled state", () => {
    render(<Select options={options} disabled />);
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-disabled", "true");
  });
});
