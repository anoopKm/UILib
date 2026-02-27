import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, Tab, TabPanel, Typography } from "@uilib/core";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    variant: { control: "select", options: ["line", "enclosed", "pill"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Tabs defaultValue="tab1" {...args}>
      <TabList>
        <Tab value="tab1">Account</Tab>
        <Tab value="tab2">Security</Tab>
        <Tab value="tab3">Notifications</Tab>
      </TabList>
      <TabPanel value="tab1"><Typography>Manage your account settings and preferences.</Typography></TabPanel>
      <TabPanel value="tab2"><Typography>Update your password and security settings.</Typography></TabPanel>
      <TabPanel value="tab3"><Typography>Configure your notification preferences.</Typography></TabPanel>
    </Tabs>
  ),
  args: { variant: "line", size: "md" },
};

export const Pill: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="pill">
      <TabList>
        <Tab value="tab1">Overview</Tab>
        <Tab value="tab2">Analytics</Tab>
        <Tab value="tab3">Reports</Tab>
      </TabList>
      <TabPanel value="tab1"><Typography>Overview content</Typography></TabPanel>
      <TabPanel value="tab2"><Typography>Analytics content</Typography></TabPanel>
      <TabPanel value="tab3"><Typography>Reports content</Typography></TabPanel>
    </Tabs>
  ),
};

export const Enclosed: Story = {
  render: () => (
    <Tabs defaultValue="tab1" variant="enclosed">
      <TabList>
        <Tab value="tab1">Tab 1</Tab>
        <Tab value="tab2">Tab 2</Tab>
        <Tab value="tab3" disabled>Disabled</Tab>
      </TabList>
      <TabPanel value="tab1"><Typography>First tab content</Typography></TabPanel>
      <TabPanel value="tab2"><Typography>Second tab content</Typography></TabPanel>
    </Tabs>
  ),
};
