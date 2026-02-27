import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "@uilib/core";

const meta = {
  title: "Components/Switch",
  component: Switch,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Enable notifications" } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
  ),
};

export const Checked: Story = { args: { label: "Dark mode", defaultChecked: true } };

export const Disabled: Story = { args: { label: "Disabled switch", disabled: true } };
