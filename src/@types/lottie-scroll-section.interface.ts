import { CSSProperties } from "react";
import LottieScrollAnimations from "./lottie-scroll-animations.interface";

interface LottieScrollSectionProps extends LottieScrollAnimations {
  /**
   * @default center
   * @param animationPosition This property refers to aniamtion position inside the section.
   */
  animationPosition?: "center" | "left" | "right";

  /**
   * @default 0
   * @param startMargin This property refers to increase the trigger point, the default behavior is that the animation just will play when the section take all the screen view, but you can increase that value to start before that.
   */
  startMargin?: number;
  /**
   * @param style This property refers to section container styles(not the animation container).
   */
  style?: CSSProperties;
  /**
   * @param style This property refers to animation container styles(not the section container).
   */
  animationStyle?: CSSProperties;
  /**
   * @param className This property refers to section container className(not the animation container).
   */
  className?: string;
}

export default LottieScrollSectionProps;
