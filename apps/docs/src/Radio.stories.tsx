import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "@uilib/core";

const meta = {
  title: "Components/Radio",
  component: RadioGroup,
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup name="framework" defaultValue="react">
      <Radio value="react" label="React" />
      <Radio value="vue" label="Vue" />
      <Radio value="angular" label="Angular" />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup name="size" defaultValue="md" orientation="horizontal">
      <Radio value="sm" label="Small" />
      <Radio value="md" label="Medium" />
      <Radio value="lg" label="Large" />
    </RadioGroup>
  ),
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup name="disabled" defaultValue="a" disabled>
      <Radio value="a" label="Option A" />
      <Radio value="b" label="Option B" />
    </RadioGroup>
  ),
};
