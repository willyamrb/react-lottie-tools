import LottieOptions from "./lottie-options.interface";

interface LottieScrollSectionProps {
  /**
   * @param settings This property refers to normal lottie configs.
   */
  settings: LottieOptions;
  /**
   * @param height This property refers to section height, how much higher this value, will take more time to finish the animation.
   */
  height: number;
  /**
   * @default center
   * @param animationPosition This property refers to aniamtion position inside the section.
   */
  animationPosition?: "center" | "left" | "right";
  /**
   * @default false
   * @param debugMode This property shows the section and animation container borders, only for debugging purposes.
   */
  debugMode?: boolean;
}

export default LottieScrollSectionProps;
