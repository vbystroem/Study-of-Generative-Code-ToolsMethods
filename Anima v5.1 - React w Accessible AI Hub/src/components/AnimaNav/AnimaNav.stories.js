import { AnimaNav } from ".";

export default {
  title: "Components/AnimaNav",
  component: AnimaNav,
  argTypes: {
    type: {
      options: ["no-x"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "no-x",
    className: {},
  },
};