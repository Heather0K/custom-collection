import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "../../components/inputs/Checkbox";

export default {
  title: "inputs/Checkbox",
  component: Checkbox,
  argTypes: {
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  inLineLabel: "checkbox",
};
