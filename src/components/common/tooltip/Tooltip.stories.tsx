import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import QuestionIcon from "../../../shared/icons/QuestionIcon";
import styled from "styled-components";

export default {
  title: "common/Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const QuestionMark = styled(QuestionIcon)`
  fill: #4c4b4b;
  font-size: 24px;
`;
const Template: ComponentStory<typeof Tooltip> = (args) => {
  return (
    <Tooltip {...args}>
      <QuestionMark />
    </Tooltip>
  );
};

export const Default = Template.bind({});
Default.args = {
  message: "I'm a tooltip!",
};
