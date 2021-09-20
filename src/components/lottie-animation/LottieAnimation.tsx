import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import LottieAnimationProps from "../../@types/lottie-animation.interface";
import { useInView } from "react-intersection-observer";

const LottieAnimation: React.FC<LottieAnimationProps> = ({
  onClick = () => null,
  currentTimeline = "from",
  justPlayInView = false,
  inViewSettings = {},
  speed = 1,
  loop = false,
  autoplay = justPlayInView ? false : true,
  style = { width: "100%", height: "100%" },
  frames,
  animation,
  ...rest
}) => {
  const animRef = useRef<HTMLDivElement>(null);
  const [anim, setAnim] = useState<AnimationItem>();
  const { ref, inView } = useInView(inViewSettings);

  useEffect(() => {
    if (!animRef.current) return;
    inititAnimation();

    return () => {
      if (!anim) return;
      anim?.destroy();
    };
  }, [animRef]);

  const inititAnimation = () => {
    if (!animRef.current) return;

    const newAnim = lottie.loadAnimation({
      renderer: "svg",
      container: animRef.current,
      autoplay,
      loop,
      initialSegment: frames,
      animationData: typeof animation !== "string" ? animation : undefined,
      path: typeof animation === "string" ? animation : undefined,
      ...rest,
    });
    newAnim.setSpeed(speed);
    setAnim(newAnim);
  };

  useEffect(() => {
    if (!anim) return;
    anim?.destroy();
    inititAnimation();
  }, [animation]);

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
    if (!justPlayInView) return;

    if (inView) {
      anim?.play();
    } else {
      anim?.stop();
    }
  }, [inView]);

  return (
    <div ref={justPlayInView ? ref : undefined} style={style}>
      <div
        ref={animRef}
        onClick={onClick}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LottieAnimation;
