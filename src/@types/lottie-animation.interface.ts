import { CSSProperties, MouseEventHandler } from "react";
import { IntersectionOptions } from "react-intersection-observer";
import { Timeline } from ".";
import { LottieSettings } from "..";

interface LottieAnimationProps extends LottieSettings {
  currentTimeline?: Timeline;
  style: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  inViewSettings?: IntersectionOptions;
}

export default LottieAnimationProps;
