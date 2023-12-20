import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TemplateName } from "./TemplateName";

export default {
  title: "components/TemplateName",
  component: TemplateName,
  argTypes: {},
} as ComponentMeta<typeof TemplateName>;

const Template: ComponentStory<typeof TemplateName> = (args) => {
  return <TemplateName {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  foo: "hiya",
};
