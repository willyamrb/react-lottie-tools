import LottieSettings from "./lottie-settings.interface";

interface LottieScrollSectionProps
  extends Omit<LottieSettings, "loop" | "autoplay"> {
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
