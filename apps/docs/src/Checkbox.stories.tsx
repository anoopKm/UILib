import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@uilib/core";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { label: "Accept terms and conditions" } };

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Checkbox label="Small checkbox" size="sm" />
      <Checkbox label="Medium checkbox" size="md" />
      <Checkbox label="Large checkbox" size="lg" />
    </div>
  ),
};

export const Checked: Story = { args: { label: "Checked by default", defaultChecked: true } };

export const Indeterminate: Story = { args: { label: "Indeterminate state", indeterminate: true } };

export const Disabled: Story = { args: { label: "Disabled checkbox", disabled: true } };
