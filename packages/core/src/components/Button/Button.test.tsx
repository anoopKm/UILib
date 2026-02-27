import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: "Click me" });
    expect(button).toHaveClass("ui-button--solid", "ui-button--md", "ui-button--primary");
  });

  it("handles click events", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    await userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it("renders disabled state", async () => {
    const onClick = vi.fn();
    render(<Button disabled onClick={onClick}>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("renders loading state", () => {
    render(<Button loading>Loading</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
    expect(button).toHaveClass("ui-button--loading");
    expect(button.querySelector(".ui-button__spinner")).toBeInTheDocument();
  });

  it("renders variant classes", () => {
    render(<Button variant="outline" colorScheme="error">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("ui-button--outline", "ui-button--error");
  });

  it("renders full width", () => {
    render(<Button fullWidth>Full</Button>);
    expect(screen.getByRole("button")).toHaveClass("ui-button--full-width");
  });

  it("renders icons", () => {
    render(<Button leftIcon={<span data-testid="left">L</span>} rightIcon={<span data-testid="right">R</span>}>Text</Button>);
    expect(screen.getByTestId("left")).toBeInTheDocument();
    expect(screen.getByTestId("right")).toBeInTheDocument();
  });
});
