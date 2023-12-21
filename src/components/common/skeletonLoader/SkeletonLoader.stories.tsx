import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SkeletonLoader } from "./SkeletonLoader";

export default {
  title: "common/SkeletonLoader",
  component: SkeletonLoader,
  argTypes: {},
} as ComponentMeta<typeof SkeletonLoader>;

const Template: ComponentStory<typeof SkeletonLoader> = (args) => {
  return <SkeletonLoader {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  width: "400",
  height: "400",
};
