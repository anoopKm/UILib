import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Tabs, TabList, Tab, TabPanel } from "./Tabs";

describe("Tabs", () => {
  const renderTabs = (defaultValue = "tab1") =>
    render(
      <Tabs defaultValue={defaultValue}>
        <TabList>
          <Tab value="tab1">Tab 1</Tab>
          <Tab value="tab2">Tab 2</Tab>
          <Tab value="tab3">Tab 3</Tab>
        </TabList>
        <TabPanel value="tab1">Content 1</TabPanel>
        <TabPanel value="tab2">Content 2</TabPanel>
        <TabPanel value="tab3">Content 3</TabPanel>
      </Tabs>,
    );

  it("renders active tab panel", () => {
    renderTabs();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.queryByText("Content 2")).not.toBeInTheDocument();
  });

  it("switches tab on click", async () => {
    renderTabs();
    await userEvent.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.queryByText("Content 1")).not.toBeInTheDocument();
  });

  it("marks active tab with aria-selected", () => {
    renderTabs();
    expect(screen.getByText("Tab 1")).toHaveAttribute("aria-selected", "true");
    expect(screen.getByText("Tab 2")).toHaveAttribute("aria-selected", "false");
  });

  it("supports keyboard navigation", async () => {
    renderTabs();
    screen.getByText("Tab 1").focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(screen.getByText("Tab 2")).toHaveFocus();
  });
});
