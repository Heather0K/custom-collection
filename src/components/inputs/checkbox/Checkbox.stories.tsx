import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Checkbox } from "./Checkbox";

export default {
  title: "inputs/Checkbox",
  component: Checkbox,
  argTypes: {
    color: { control: "color" },
    disabled: { control: "boolean" },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      {...args}
      onChange={() => {
        setChecked(!checked);
      }}
      checked={checked}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  inLineLabel: "checkbox",
  disabled: false,
  subLabel: "sublabel",
  countText: "12",
  id: "1",
  color: "",
};
