import { CSSProperties, MouseEventHandler } from "react";
import { IntersectionOptions } from "react-intersection-observer";
import { Timeline } from ".";
import { LottieSettings } from "..";

interface LottieAnimationProps extends LottieSettings {
  /**
   * @param currentTimeline This property refers to the current animation state, "from" means initial and "to" to end! You can use this property to control the animation.
   */
  currentTimeline?: Timeline;
  /**
   * @param speed This property refers to the animation speed, higher values will play the animation faster.
   */
  speed?: number;
  /**
   * @param style This property refers to animation container styles.
   */
  style?: CSSProperties;
  /**
   * @param onClick This property can be used to trigger click events.
   */
  onClick?: MouseEventHandler<HTMLDivElement>;
  /**
   * @param justPlayInView This property can be used like a trigger to play the animation just when it is in view.
   */
  justPlayInView?: boolean;
  /**
   * @param inViewSettings This property can be used to configure inView interaction. This configs just will be applied if property justPlayInView is true.
   */
  inViewSettings?: IntersectionOptions;
}

export default LottieAnimationProps;
