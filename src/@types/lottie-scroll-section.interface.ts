import { AnimationSegment } from "lottie-web";
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
  /**
   * @param frames This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one!
   */
  frames: AnimationSegment;
}

export default LottieScrollSectionProps;
