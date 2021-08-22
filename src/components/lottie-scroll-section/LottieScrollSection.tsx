import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { useTransform, useViewportScroll } from "framer-motion";
import getTopPosition from "../../utils/getTopDistance";
import LottieScrollSectionProps from "../../@types/lottie-scroll-section.interface";
import getTotalViewport from "../../utils/getTotalViewport";

const LottieScrollSection: React.FC<LottieScrollSectionProps> = ({
  height,
  animationPosition = "center",
  debugMode = false,
  frames,
  animation,
  ...rest
}) => {
  if (!frames) {
    throw new Error(
      "LottieScrollSection needs the frames property in settings object!"
    );
  }

  if (height < window.innerHeight) {
    throw new Error(
      `LottieScrollSection needs that height property be heigher than screen height(${window.innerHeight}px)!`
    );
  }

  const lottieContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState<AnimationItem>();
  const { scrollY } = useViewportScroll();
  const scene = useTransform(
    scrollY,
    [getTopPosition(sectionRef), getTotalViewport(sectionRef, height)],
    frames
  );

  useEffect(() => {
    if (!lottieContainerRef.current) return;

    if (!anim) {
      const newAnim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        initialSegment: frames,
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

  const getAnimPosition = (): "center" | "flex-start" | "flex-end" => {
    switch (animationPosition) {
      case "center":
        return "center";
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      default:
        return "center";
    }
  };

  return (
    <section
      ref={sectionRef}
      style={{
        display: "flex",
        width: "100%",
        height,
        position: "relative",
        justifyContent: getAnimPosition(),
        border: debugMode ? "1px solid red" : undefined,
      }}
    >
      <div
        ref={lottieContainerRef}
        style={{
          height: "100vh",
          position: "sticky",
          top: "0",
          border: debugMode ? "1px solid blue" : undefined,
        }}
      />
    </section>
  );
};

export default LottieScrollSection;
