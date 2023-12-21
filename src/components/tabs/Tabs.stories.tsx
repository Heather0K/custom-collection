import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tabs } from "./Tabs";

export default {
  title: "components/Tabs",
  component: Tabs,
  argTypes: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => {
  const [currentTab, setCurrentTab] = useState("1");
  return (
    <>
      <Tabs
        {...args}
        tabId={currentTab}
        onTab={(t) => {
          setCurrentTab(t);
        }}
      />
      {currentTab === "1" ? <p>Tab 1 content!</p> : <p>Tab 2 content! </p>}
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { id: "1", title: "tab 1" },
    { id: "2", title: "tab 2" },
  ],
  airaLabel: "tab aria",
};
