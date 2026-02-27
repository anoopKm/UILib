import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip, Button } from "@uilib/core";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    placement: { control: "select", options: ["top", "bottom", "left", "right"] },
    delay: { control: "number" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { content: "This is a tooltip", placement: "top" },
  render: (args) => (
    <div style={{ padding: 80, display: "flex", justifyContent: "center" }}>
      <Tooltip {...args}>
        <Button>Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const Placements: Story = {
  render: () => (
    <div style={{ padding: 80, display: "flex", gap: 24, justifyContent: "center" }}>
      <Tooltip content="Top" placement="top"><Button variant="outline">Top</Button></Tooltip>
      <Tooltip content="Bottom" placement="bottom"><Button variant="outline">Bottom</Button></Tooltip>
      <Tooltip content="Left" placement="left"><Button variant="outline">Left</Button></Tooltip>
      <Tooltip content="Right" placement="right"><Button variant="outline">Right</Button></Tooltip>
    </div>
  ),
};
