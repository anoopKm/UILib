import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@uilib/core";

const meta = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: { control: "select", options: ["solid", "outline", "ghost", "link"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    colorScheme: { control: "select", options: ["primary", "secondary", "error", "success"] },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "Button" } };

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button colorScheme="primary">Primary</Button>
      <Button colorScheme="secondary">Secondary</Button>
      <Button colorScheme="error">Error</Button>
      <Button colorScheme="success">Success</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: { children: "Submitting...", loading: true },
};

export const Disabled: Story = {
  args: { children: "Disabled", disabled: true },
};

export const FullWidth: Story = {
  args: { children: "Full Width Button", fullWidth: true },
};
