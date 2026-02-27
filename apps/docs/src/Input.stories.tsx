import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@uilib/core";

const meta = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    variant: { control: "select", options: ["outline", "filled", "flush"] },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { placeholder: "Enter text...", label: "Label" } };

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 320 }}>
      <Input label="Outline" variant="outline" placeholder="Outline input" />
      <Input label="Filled" variant="filled" placeholder="Filled input" />
      <Input label="Flush" variant="flush" placeholder="Flush input" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 320 }}>
      <Input size="sm" placeholder="Small" />
      <Input size="md" placeholder="Medium" />
      <Input size="lg" placeholder="Large" />
    </div>
  ),
};

export const WithError: Story = {
  args: { label: "Email", error: true, errorMessage: "Please enter a valid email.", placeholder: "you@example.com" },
};

export const WithHelper: Story = {
  args: { label: "Password", type: "password", helperText: "Must be at least 8 characters.", placeholder: "••••••••" },
};

export const Disabled: Story = {
  args: { label: "Disabled", disabled: true, placeholder: "Cannot edit" },
};
