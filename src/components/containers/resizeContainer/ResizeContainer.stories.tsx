import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ResizeContainer } from "./ResizeContainer";

export default {
  title: "containers/Resize Container",
  component: ResizeContainer,
} as ComponentMeta<typeof ResizeContainer>;

const Template: ComponentStory<typeof ResizeContainer> = (args) => {
  return (
    <div>
      <ResizeContainer {...args} />{" "}
    </div>
  );
};

export const Bottom = Template.bind({});
Bottom.args = {
  direction: "bottom",
  children: <div>hi</div>,
};
export const Right = Template.bind({});
Right.args = {
  direction: "right",
  children: (
    <div
      style={{ backgroundColor: "red", width: "100%", height: "100%" }}
    ></div>
  ),
};
