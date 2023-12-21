import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Modal } from "./Modal";

export default {
  title: "components/Modal",
  component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
  return <Modal {...args}>hiya</Modal>;
};

export const Default = Template.bind({});
Default.args = {
  buttonText: "open me!",
  title: "Modal!",
};
