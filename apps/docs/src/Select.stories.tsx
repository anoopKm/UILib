import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "@uilib/core";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS", disabled: true },
];

const meta = {
  title: "Components/Select",
  component: Select,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { options, label: "Framework", placeholder: "Choose a framework..." },
};

export const WithValue: Story = {
  args: { options, label: "Framework", value: "react" },
};

export const Error: Story = {
  args: { options, label: "Required field", error: true, errorMessage: "Please select an option." },
};

export const Disabled: Story = {
  args: { options, label: "Disabled", disabled: true },
};

export const FullWidth: Story = {
  args: { options, label: "Full Width", fullWidth: true, placeholder: "Select..." },
  decorators: [(Story) => <div style={{ maxWidth: 400 }}><Story /></div>],
};
