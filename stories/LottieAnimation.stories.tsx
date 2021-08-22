import { ComponentMeta, ComponentStory } from "@storybook/react";
import menu from "../src/assets/lottie-examples/menu.json";
import LottieAnimation from "../src/components/lottie-animation/LottieAnimation";

export default {
  title: "Components/LottieAnimation",
  component: LottieAnimation,
} as ComponentMeta<typeof LottieAnimation>;

const Template: ComponentStory<typeof LottieAnimation> = (args) => (
  <LottieAnimation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  style: { width: "200px", height: "200px" },
  animationData: menu,
  // loop: false,
  // autoplay: false,
  initialSegment: [0, 100],
  // inViewSettings: {},
};
