import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge", () => {
  it("renders with default props", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toHaveClass("ui-badge", "ui-badge--subtle", "ui-badge--primary", "ui-badge--md");
  });

  it("renders solid variant", () => {
    render(<Badge variant="solid" colorScheme="error">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge).toHaveClass("ui-badge--solid", "ui-badge--error");
  });

  it("renders with dot indicator", () => {
    render(<Badge dot>Online</Badge>);
    const badge = screen.getByText("Online");
    expect(badge).toHaveClass("ui-badge--dot");
    expect(badge.querySelector(".ui-badge__dot")).toBeInTheDocument();
  });

  it("supports sizes", () => {
    render(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("ui-badge--lg");
  });
});
