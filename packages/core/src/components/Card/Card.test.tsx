import { render, screen } from "@testing-library/react";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";

describe("Card", () => {
  it("renders with default props", () => {
    render(<Card data-testid="card">Content</Card>);
    const card = screen.getByTestId("card");
    expect(card).toHaveClass("ui-card", "ui-card--elevated", "ui-card--padding-md");
  });

  it("renders outlined variant", () => {
    render(<Card variant="outlined" data-testid="card">Content</Card>);
    expect(screen.getByTestId("card")).toHaveClass("ui-card--outlined");
  });

  it("renders compound pattern", () => {
    render(
      <Card>
        <CardHeader data-testid="header">Title</CardHeader>
        <CardBody data-testid="body">Body</CardBody>
        <CardFooter data-testid="footer">Actions</CardFooter>
      </Card>,
    );
    expect(screen.getByTestId("header")).toHaveClass("ui-card__header");
    expect(screen.getByTestId("body")).toHaveClass("ui-card__body");
    expect(screen.getByTestId("footer")).toHaveClass("ui-card__footer");
  });

  it("supports padding sizes", () => {
    render(<Card padding="lg" data-testid="card">Content</Card>);
    expect(screen.getByTestId("card")).toHaveClass("ui-card--padding-lg");
  });
});
