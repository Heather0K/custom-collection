import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  title: "common/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return <Accordion {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  foo: "hiya",
};
