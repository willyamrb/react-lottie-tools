import { AnimationConfigWithData, AnimationConfigWithPath } from "lottie-web";

interface LottieOptions
  extends Omit<AnimationConfigWithPath, "container">,
    Omit<AnimationConfigWithData, "container"> {}

export default LottieOptions;
