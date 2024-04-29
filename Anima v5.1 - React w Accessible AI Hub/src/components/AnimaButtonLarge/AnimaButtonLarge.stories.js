import React from 'react';
import { AnimaButtonLarge } from "./AnimaButtonLarge";

export default {
  title: "Components/AnimaButtonLarge",
  component: AnimaButtonLarge,
  argTypes: {
    onClick: { action: 'clicked' }
  },
};

const Template = (args) => <AnimaButtonLarge {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "Välj från lista",
};