import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@uilib/core";

const meta = {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    status: { control: "select", options: ["info", "success", "warning", "error"] },
    variant: { control: "select", options: ["subtle", "solid", "outline", "left-accent"] },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "This is an informational alert.", status: "info" } };

export const Statuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert status="info">This is an info alert.</Alert>
      <Alert status="success">Operation completed successfully.</Alert>
      <Alert status="warning">Please check your input.</Alert>
      <Alert status="error">Something went wrong.</Alert>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Alert variant="subtle" status="info">Subtle variant</Alert>
      <Alert variant="solid" status="success">Solid variant</Alert>
      <Alert variant="outline" status="warning">Outline variant</Alert>
      <Alert variant="left-accent" status="error">Left accent variant</Alert>
    </div>
  ),
};

export const Closable: Story = {
  args: { children: "This alert can be closed.", onClose: () => alert("Closed!") },
};
