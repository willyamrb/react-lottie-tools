import { ComponentMeta, ComponentStory } from "@storybook/react";
import LottieScrollSection from "../src/components/lottie-scroll-section/LottieScrollSection";
import chest from "../src/assets/lottie-examples/chest.json";

export default {
  title: "Components/LottieScrollSection",
  component: LottieScrollSection,
} as ComponentMeta<typeof LottieScrollSection>;

const Template: ComponentStory<typeof LottieScrollSection> = (args) => (
  <LottieScrollSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  height: 5000,
  animationPosition: "center",
  debugMode: false,
  animation: chest,
  frames: [0, 200],
};
