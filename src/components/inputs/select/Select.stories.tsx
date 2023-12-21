import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Select } from "./Select";
import { DumpsterFire } from "../../../shared/icons/DumpsterFire";

const Options = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
  { value: "4", label: "Option 4" },
];
export default {
  title: "inputs/Select",
  component: Select,
  argTypes: {},
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />;
};

export const DefaultSelect = Template.bind({});
DefaultSelect.args = {
  options: Options,
  initOption: Options[0],
  placeholder: "pick one!",
};
