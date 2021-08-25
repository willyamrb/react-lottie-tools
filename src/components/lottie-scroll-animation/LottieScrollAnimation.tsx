import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { useTransform, useViewportScroll } from "framer-motion";
import getTopPosition from "../../utils/getTopDistance";
import getTotalViewport from "../../utils/getTotalViewport";
import LottieScrollAnimationProps from "../../@types/lottie-scroll-animation.interface";
import {
  getHorizontalAnimPosition,
  getVerticalAnimPosition,
} from "../../utils/animationAlign";

const LottieScrollAnimation: React.FC<LottieScrollAnimationProps> = ({
  height,
  frames,
  animation,
  className,
  debugMode = false,
  verticalAnimationAlign = "center",
  horizontalAnimationAlign = "center",
  style,
  ...rest
}) => {
  if (!frames) {
    throw new Error(
      "LottieScrollAnimation needs the frames property!"
    );
  }

  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState<AnimationItem>();
  const { scrollY } = useViewportScroll();
  const scene = useTransform(
    scrollY,
    [getTopPosition(parentRef), getTotalViewport(parentRef, height)],
    frames
  );

  useEffect(() => {
    if (!lottieContainerRef.current) return;

    if (!anim) {
      const newAnim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        initialSegment: [0, frames[1]],
        animationData: typeof animation !== "string" ? animation : undefined,
        path: typeof animation === "string" ? animation : undefined,
        ...rest,
        loop: false,
        autoplay: false,
      });
      setAnim(newAnim);

      scene.onChange((data) => {
        newAnim.goToAndStop(data, true);
      });
    }

    return () => {
      if (!anim) return;
      anim?.destroy();
    };
  }, [lottieContainerRef]);

  return (
    <div
      ref={parentRef}
      style={{
        width: '100%',
        height,
        position: "relative",
        border: debugMode ? "1px solid red" : undefined,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100vh",
          top: "0",
          position: "sticky",
          display: "flex",
          alignItems: getVerticalAnimPosition(verticalAnimationAlign),
          justifyContent: getHorizontalAnimPosition(horizontalAnimationAlign),
        }}
      >
        <div
          ref={lottieContainerRef}
          className={className}
          style={{
            ...style,
            border: debugMode ? "1px solid blue" : undefined,
          }}
        />
      </div>
    </div>
  );
};

export default LottieScrollAnimation;
