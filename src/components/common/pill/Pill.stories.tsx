import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Pill } from "./Pill";

export default {
  title: "common/Pill",
  component: Pill,
  argTypes: {},
} as ComponentMeta<typeof Pill>;

const Template: ComponentStory<typeof Pill> = (args) => {
  return <Pill {...args} onRemove={false} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "im a pill",
};
