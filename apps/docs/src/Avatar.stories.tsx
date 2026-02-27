import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "@uilib/core";

const meta = {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { name: "John Doe", size: "md" } };

export const WithImage: Story = {
  args: { src: "https://i.pravatar.cc/150?img=32", alt: "Jane", size: "lg" },
};

export const Initials: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Avatar name="Alice Brown" size="sm" />
      <Avatar name="Bob Carter" size="md" />
      <Avatar name="Carol Davis" size="lg" />
      <Avatar name="Dan Evans" size="xl" />
    </div>
  ),
};

export const Fallback: Story = {
  render: () => <Avatar size="lg" />,
};

export const Group: Story = {
  render: () => (
    <AvatarGroup max={3}>
      <Avatar name="Alice Brown" />
      <Avatar name="Bob Carter" />
      <Avatar name="Carol Davis" />
      <Avatar name="Dan Evans" />
      <Avatar name="Eve Ford" />
    </AvatarGroup>
  ),
};
