import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardBody, CardFooter, Button, Typography } from "@uilib/core";

const meta = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: { control: "select", options: ["elevated", "outlined", "filled"] },
    padding: { control: "select", options: ["none", "sm", "md", "lg"] },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: "elevated", padding: "md" },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 400 }}>
      <CardHeader>
        <Typography variant="h5">Card Title</Typography>
      </CardHeader>
      <CardBody>
        <Typography variant="body2">
          This is a card component with header, body, and footer sections.
          It supports elevated, outlined, and filled variants.
        </Typography>
      </CardBody>
      <CardFooter>
        <Button size="sm">Action</Button>
        <Button size="sm" variant="ghost">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Card variant="outlined" style={{ maxWidth: 400 }}>
      <CardBody>
        <Typography variant="body1">An outlined card variant.</Typography>
      </CardBody>
    </Card>
  ),
};

export const Filled: Story = {
  render: () => (
    <Card variant="filled" style={{ maxWidth: 400 }}>
      <CardBody>
        <Typography variant="body1">A filled card variant with subtle background.</Typography>
      </CardBody>
    </Card>
  ),
};
