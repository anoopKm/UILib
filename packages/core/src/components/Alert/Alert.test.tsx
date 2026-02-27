import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Alert } from "./Alert";

describe("Alert", () => {
  it("renders with default info status", () => {
    render(<Alert>Something happened</Alert>);
    const alert = screen.getByRole("alert");
    expect(alert).toHaveClass("ui-alert--info", "ui-alert--subtle");
    expect(alert).toHaveTextContent("Something happened");
  });

  it("renders with error status", () => {
    render(<Alert status="error">Error occurred</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("ui-alert--error");
  });

  it("renders close button when onClose provided", async () => {
    const onClose = vi.fn();
    render(<Alert onClose={onClose}>Closable</Alert>);
    const closeBtn = screen.getByLabelText("Close alert");
    expect(closeBtn).toBeInTheDocument();
    await userEvent.click(closeBtn);
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("renders without close button when onClose not provided", () => {
    render(<Alert>No close</Alert>);
    expect(screen.queryByLabelText("Close alert")).not.toBeInTheDocument();
  });

  it("supports variant styles", () => {
    render(<Alert variant="solid" status="success">Done</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("ui-alert--solid", "ui-alert--success");
  });
});
