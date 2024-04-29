import { AnimaCard } from ".";

export default {
  title: "Components/AnimaCard",
  component: AnimaCard,
  argTypes: {
    type: {
      options: ["bike"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "bike",
    className: "",
  },
};
