import { AnimationConfigWithData, AnimationConfigWithPath } from "lottie-web";

interface LottieSettings
  extends Omit<AnimationConfigWithPath, "container" | "renderer">,
    Omit<AnimationConfigWithData, "container" | "renderer"> {}

export default LottieSettings;
