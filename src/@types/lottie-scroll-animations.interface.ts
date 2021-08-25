import { AnimationSegment } from "lottie-web";
import { LottieSettings } from "..";

interface LottieScrollAnimations
  extends Omit<LottieSettings, "loop" | "autoplay"> {
  /**
   * @param height This property refers to section height, how much higher this value, will take more time to finish the animation.
   */
  height: number;
  /**
   * @param frames This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one!
   */
  frames: AnimationSegment;
  /**
   * @default false
   * @param debugMode This property shows the section and animation container borders, only for debugging purposes.
   */
  debugMode?: boolean;
}

export default LottieScrollAnimations;
