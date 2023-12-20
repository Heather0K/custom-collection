import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SidebarLayout } from "./SidebarLayout";

export default {
  title: "Layouts/Sidebar",
  component: SidebarLayout,
  argTypes: {},
} as ComponentMeta<typeof SidebarLayout>;

const Template: ComponentStory<typeof SidebarLayout> = (args) => {
  const [open, setOpen] = useState(true);
  return (
    <SidebarLayout
      {...args}
      onOpen={() => {
        setOpen(!open);
      }}
      open={open}
    >
      <p>children</p>
    </SidebarLayout>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Sidebar",
  content: <p>content</p>,
};
