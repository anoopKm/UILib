import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "@uilib/core";

const meta = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "body1", "body2", "caption", "overline"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "error", "success", "warning", "muted", "inherit"],
    },
    align: { control: "select", options: ["left", "center", "right"] },
    weight: { control: "select", options: ["normal", "medium", "semibold", "bold"] },
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { args: { children: "The quick brown fox jumps over the lazy dog." } };

export const Headings: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Typography color="primary">Primary color</Typography>
      <Typography color="secondary">Secondary color</Typography>
      <Typography color="error">Error color</Typography>
      <Typography color="success">Success color</Typography>
      <Typography color="muted">Muted color</Typography>
    </div>
  ),
};
