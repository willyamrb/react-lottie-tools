import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import LottieAnimationProps from "../../@types/lottie-animation.interface";
import { useInView } from "react-intersection-observer";

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  onClick = () => null,
  currentTimeline = "from",
  inViewSettings,
  autoplay = false,
  loop = false,
  style = { width: "100%", height: "100%" },
  ...rest
}) => {
  const animRef = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState<AnimationItem>();
  const { ref, inView } = useInView(inViewSettings);

  useEffect(() => {
    if (!animRef.current) return;

    if (!anim) {
      const newAnim = lottie.loadAnimation({
        renderer: "svg",
        container: animRef.current,
        autoplay,
        loop,
        ...rest,
      });
      setAnim(newAnim);
    }

    return () => {
      if (!anim) return;
      anim?.destroy();
    };
  }, [animRef]);

  useEffect(() => {
    if (currentTimeline === "to") {
      anim?.setDirection(1);
      anim?.play();
    } else {
      anim?.setDirection(-1);
      anim?.play();
    }
  }, [currentTimeline]);

  useEffect(() => {
    if (!inViewSettings) return;

    if (inView) {
      anim?.play();
    } else {
      anim?.stop();
    }
  }, [inView]);

  return (
    <div ref={inViewSettings ? ref : undefined} style={style}>
      <div
        ref={animRef}
        onClick={onClick}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieAnimation;
