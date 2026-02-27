import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "./Modal";

describe("Modal", () => {
  it("does not render when closed", () => {
    render(<Modal open={false} onClose={vi.fn()}>Content</Modal>);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("renders when open", () => {
    render(<Modal open onClose={vi.fn()}>Content</Modal>);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("calls onClose on Escape key", async () => {
    const onClose = vi.fn();
    render(<Modal open onClose={onClose}>Content</Modal>);
    await userEvent.keyboard("{Escape}");
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("renders compound components", () => {
    render(
      <Modal open onClose={vi.fn()}>
        <ModalHeader>Title</ModalHeader>
        <ModalBody>Body content</ModalBody>
        <ModalFooter>Footer content</ModalFooter>
      </Modal>,
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
    expect(screen.getByText("Footer content")).toBeInTheDocument();
  });

  it("renders close button in header", async () => {
    const onClose = vi.fn();
    render(
      <Modal open onClose={onClose}>
        <ModalHeader onClose={onClose}>Title</ModalHeader>
      </Modal>,
    );
    await userEvent.click(screen.getByLabelText("Close"));
    expect(onClose).toHaveBeenCalled();
  });
});
