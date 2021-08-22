import {
  AnimationConfig,
  AnimationSegment,
  // AnimationConfigWithData,
  // AnimationConfigWithPath,
} from "lottie-web";

interface LottieSettings
  extends Omit<AnimationConfig, "container" | "renderer" | "initialSegment"> {
  /**
   * @param animation This property refers to animation data, it is similar to path and animationData property from offical lottie-web lib!
   */
  animation: string | any;
  /**
   * @param frames This property refers to animation frames, if your animation has 300 frames, you need to put [0, 300], being 0 the initial frame and 300 the last one!
   */
  frames?: AnimationSegment;
}

export default LottieSettings;
