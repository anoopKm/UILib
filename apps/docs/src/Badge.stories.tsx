import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@uilib/core";

const meta = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "subtle"] },
    colorScheme: { control: "select", options: ["primary", "secondary", "error", "warning", "success", "info"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Badge" } };

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="subtle">Subtle</Badge>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <Badge variant="solid" colorScheme="primary">Primary</Badge>
      <Badge variant="solid" colorScheme="secondary">Secondary</Badge>
      <Badge variant="solid" colorScheme="success">Success</Badge>
      <Badge variant="solid" colorScheme="error">Error</Badge>
      <Badge variant="solid" colorScheme="warning">Warning</Badge>
      <Badge variant="solid" colorScheme="info">Info</Badge>
    </div>
  ),
};

export const WithDot: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Badge dot colorScheme="success">Online</Badge>
      <Badge dot colorScheme="error">Offline</Badge>
      <Badge dot colorScheme="warning">Away</Badge>
    </div>
  ),
};
