import { AnimaNav } from ".";

export default {
  title: "Components/AnimaNav",
  component: AnimaNav,
  argTypes: {
    type: {
      options: ["default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "default",
    className: "",
  },
};
