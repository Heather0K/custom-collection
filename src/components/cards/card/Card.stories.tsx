import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from "../../../../public/unspashed.jpg";
import { Card } from "./Card";
export default {
  title: "cards/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const ImageCard = Template.bind({});
ImageCard.args = {
  title: "Image Card",
  subtitle: "Subtitle",
  image: img,
  type: "image",
  content: "hey this is some card content",
};
export const ListCard = Template.bind({});
ListCard.args = {
  title: "List Card",
  subtitle: "Subtitle",
  image: img,
  type: "list",
  content: "hey this is some card content",
};

export const HoverCard = Template.bind({});
HoverCard.args = {
  title: "Hover Card ",
  subtitle: "Subtitle",
  image: img,
  type: "image",
  small: true,
  content: "hey this is some card content",
};
