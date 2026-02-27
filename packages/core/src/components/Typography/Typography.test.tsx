import { render, screen } from "@testing-library/react";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("renders with default variant", () => {
    render(<Typography>Hello</Typography>);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    expect(screen.getByText("Hello").tagName).toBe("P");
    expect(screen.getByText("Hello")).toHaveClass("ui-typography--body1");
  });

  it("renders heading variants with correct tags", () => {
    const { container } = render(
      <>
        <Typography variant="h1">H1</Typography>
        <Typography variant="h2">H2</Typography>
        <Typography variant="h3">H3</Typography>
      </>,
    );
    expect(container.querySelector("h1")).toHaveTextContent("H1");
    expect(container.querySelector("h2")).toHaveTextContent("H2");
    expect(container.querySelector("h3")).toHaveTextContent("H3");
  });

  it("supports polymorphic as prop", () => {
    render(<Typography as="span" variant="h1">Span H1</Typography>);
    expect(screen.getByText("Span H1").tagName).toBe("SPAN");
  });

  it("applies color class", () => {
    render(<Typography color="primary">Colored</Typography>);
    expect(screen.getByText("Colored")).toHaveClass("ui-typography--color-primary");
  });

  it("applies alignment class", () => {
    render(<Typography align="center">Centered</Typography>);
    expect(screen.getByText("Centered")).toHaveClass("ui-typography--align-center");
  });

  it("applies truncate class", () => {
    render(<Typography truncate>Truncated</Typography>);
    expect(screen.getByText("Truncated")).toHaveClass("ui-typography--truncate");
  });

  it("merges custom className", () => {
    render(<Typography className="custom">Test</Typography>);
    expect(screen.getByText("Test")).toHaveClass("custom");
    expect(screen.getByText("Test")).toHaveClass("ui-typography");
  });
});
