import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Alert } from "./Alert";
import { Theme } from "../../../shared/global";

export default {
  title: "common/Alert",
  component: Alert,
  argTypes: {},
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => {
  return <Alert {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  color: Theme.info,
  message: "This is an alert!!!",
  showAlert: true,
};
