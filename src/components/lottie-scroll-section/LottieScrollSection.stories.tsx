import { ComponentMeta, ComponentStory } from "@storybook/react";
import LottieScrollSection from "./LottieScrollSection";
import chest from "../../assets/lottie-examples/chest.json";

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
  settings: {
    renderer: "svg",
    animationData: chest,
    initialSegment: [0, 200],
  },
};
