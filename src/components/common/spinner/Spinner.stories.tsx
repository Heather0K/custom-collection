import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Spinner } from "./Spinner";

export default {
  title: "common/Spinner",
  component: Spinner,
  argTypes: {},
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => {
  return <Spinner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: "orange",
};
