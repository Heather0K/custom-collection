import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";
import { DumpsterFire } from "../../../shared/icons/dumpsterFire";

export default {
  title: "inputs/Button",
  component: Button,
  argTypes: {
    type: {
      options: { icon: "icon", text: "text", default: "default" },
      control: "select",
      defaultValue: "default",
    },
    uppercase: { control: "boolean", defaultValue: false },
    disabled: { control: "boolean", defaultValue: false },
    primary: { control: "boolean", defaultValue: true },
    secondary: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args} />;
};

export const SolidButton = Template.bind({});
SolidButton.args = {
  ariaLabel: "button",
  children: "Button",
};
export const TextButton = Template.bind({});
TextButton.args = {
  type: "text",
  ariaLabel: "button",
  children: "Button",
};

export const IconButton = Template.bind({});
IconButton.args = {
  type: "icon",
  ariaLabel: "button",
  children: <DumpsterFire />,
};

export const TextIconButton = Template.bind({});
TextIconButton.args = {
  type: "text",
  ariaLabel: "button",
  // eslint-disable-next-line react/jsx-key
  children: ["button", <DumpsterFire />],
};
