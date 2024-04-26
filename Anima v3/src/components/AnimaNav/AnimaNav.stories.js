import { AnimaNav } from ".";

export default {
  title: "Components/AnimaNav",
  component: AnimaNav,
  argTypes: {
    type: {
      options: ["no-x", "default"],
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
