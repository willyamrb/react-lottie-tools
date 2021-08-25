import { CSSProperties } from "react";
import LottieScrollAnimations from "./lottie-scroll-animations.interface";

interface LottieScrollAnimationProps extends LottieScrollAnimations {
  /**
   * @param style This property refers to animation container styles.
   */
  style?: CSSProperties;
  /**
   * @param className This property refers to animation container className.
   */
  className?: string;
  /**
   * @param verticalAnimationAlign This property refers to vertical animation align inside parent container, it is similar to align-items from CSS.
   */
  verticalAnimationAlign?: "top" | "center" | "bottom";
  /**
   * @param horizontalAnimationAlign This property refers to horizontal animation align inside parent container, it is similar to justify-content from CSS.
   */
  horizontalAnimationAlign?: "left" | "center" | "right";
}

export default LottieScrollAnimationProps;
