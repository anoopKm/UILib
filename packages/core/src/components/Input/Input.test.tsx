import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("renders label", () => {
    render(<Input label="Email" />);
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
  });

  it("handles user input", async () => {
    render(<Input label="Name" />);
    const input = screen.getByLabelText("Name");
    await userEvent.type(input, "John");
    expect(input).toHaveValue("John");
  });

  it("renders error state", () => {
    render(<Input label="Email" error errorMessage="Required" />);
    expect(screen.getByRole("alert")).toHaveTextContent("Required");
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
  });

  it("renders helper text", () => {
    render(<Input label="Name" helperText="Enter your full name" />);
    expect(screen.getByText("Enter your full name")).toBeInTheDocument();
  });

  it("renders disabled state", () => {
    render(<Input label="Disabled" disabled />);
    expect(screen.getByLabelText("Disabled")).toBeDisabled();
  });

  it("renders adornments", () => {
    render(<Input leftAdornment={<span data-testid="left">$</span>} rightAdornment={<span data-testid="right">.00</span>} />);
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });
});
