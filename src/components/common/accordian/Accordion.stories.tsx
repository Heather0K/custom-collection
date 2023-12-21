import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./Accordion";

export default {
  title: "common/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ width: "200px" }}>
      <Accordion
        {...args}
        open={open}
        onOpen={() => {
          setOpen(!open);
        }}
      >
        <ul>
          <li>things</li>
          <li>things</li>
          <li>things</li>
          <li>things</li>
          <li>things</li>
          <li>things</li>
          <li>things</li>
        </ul>
      </Accordion>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "My Accordion",
  icon: "dots",
  ariaLabel: "accordion test",
};
