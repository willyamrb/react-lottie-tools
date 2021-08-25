import { ComponentMeta, ComponentStory } from "@storybook/react";
import menu from "../src/assets/lottie-examples/menu.json";
import LottieScrollAnimation from "../src/components/lottie-scroll-animation/LottieScrollAnimation";

export default {
  title: "Components/LottieScrollAnimation",
  component: LottieScrollAnimation,
} as ComponentMeta<typeof LottieScrollAnimation>;

const Template: ComponentStory<typeof LottieScrollAnimation> = (args) => (
  <LottieScrollAnimation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 5000,
  debugMode: false,
  animation: menu,
  frames: [0, 200],
  verticalAnimationAlign: "bottom",
  horizontalAnimationAlign: "center",
};
