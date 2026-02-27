import { render, screen } from "@testing-library/react";
import { Avatar, AvatarGroup } from "./Avatar";

describe("Avatar", () => {
  it("renders with image", () => {
    render(<Avatar src="https://example.com/avatar.jpg" alt="User" />);
    const img = screen.getByAltText("User");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });

  it("renders initials from name", () => {
    render(<Avatar name="John Doe" />);
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders fallback icon when no src or name", () => {
    render(<Avatar data-testid="avatar" />);
    const avatar = screen.getByTestId("avatar");
    expect(avatar.querySelector("svg")).toBeInTheDocument();
  });

  it("applies size classes", () => {
    render(<Avatar name="Jane" size="lg" />);
    expect(screen.getByRole("img")).toHaveClass("ui-avatar--lg");
  });
});

describe("AvatarGroup", () => {
  it("renders all avatars when under max", () => {
    render(
      <AvatarGroup max={5}>
        <Avatar name="A B" />
        <Avatar name="C D" />
      </AvatarGroup>,
    );
    expect(screen.getByText("AB")).toBeInTheDocument();
    expect(screen.getByText("CD")).toBeInTheDocument();
  });

  it("shows overflow count when exceeding max", () => {
    render(
      <AvatarGroup max={2}>
        <Avatar name="A B" />
        <Avatar name="C D" />
        <Avatar name="E F" />
      </AvatarGroup>,
    );
    expect(screen.getByText("+1")).toBeInTheDocument();
  });
});
