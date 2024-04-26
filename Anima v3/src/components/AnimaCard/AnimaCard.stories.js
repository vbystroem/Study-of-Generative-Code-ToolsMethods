import { AnimaCard } from ".";

export default {
  title: "Components/AnimaCard",
  component: AnimaCard,
  argTypes: {
    type: {
      options: ["rope", "bike", "blank"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "rope",
    className: {},
  },
};
