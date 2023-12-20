import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Searchbar } from "./Searchbar";

export default {
  title: "inputs/Searchbar",
  component: Searchbar,
  argTypes: {},
} as ComponentMeta<typeof Searchbar>;

const Template: ComponentStory<typeof Searchbar> = () => {
  return <Searchbar />;
};

export const Primary = Template.bind({});
Primary.args = {};
