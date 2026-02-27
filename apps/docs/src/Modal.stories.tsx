import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Typography, Input } from "@uilib/core";

const meta = {
  title: "Components/Modal",
  component: Modal,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg", "xl", "full"] },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal {...args} open={open} onClose={() => setOpen(false)}>
          <ModalHeader onClose={() => setOpen(false)}>
            <Typography variant="h5">Edit Profile</Typography>
          </ModalHeader>
          <ModalBody>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <Input label="Name" placeholder="Enter your name" fullWidth />
              <Input label="Email" placeholder="you@example.com" fullWidth />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Save Changes</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  },
  args: { size: "md" },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<"sm" | "md" | "lg" | "xl" | null>(null);
    return (
      <>
        <div style={{ display: "flex", gap: 8 }}>
          {(["sm", "md", "lg", "xl"] as const).map((s) => (
            <Button key={s} variant="outline" onClick={() => setSize(s)}>
              {s.toUpperCase()}
            </Button>
          ))}
        </div>
        <Modal open={!!size} onClose={() => setSize(null)} size={size || "md"}>
          <ModalHeader onClose={() => setSize(null)}>
            <Typography variant="h5">Size: {size?.toUpperCase()}</Typography>
          </ModalHeader>
          <ModalBody>
            <Typography>This modal uses the {size} size variant.</Typography>
          </ModalBody>
        </Modal>
      </>
    );
  },
};
