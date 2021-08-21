import { Box, Flex, SystemProps } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import lottie, { AnimationItem } from "lottie-web";
import { useTransform, useViewportScroll } from "framer-motion";
import getTopPosition from "../../utils/getTopDistance";
import LottieScrollSectionProps from "../../@types/lottie-scroll-section.interface";
import getTotalViewport from "../../utils/getTotalViewport";

const LottieScrollSection: React.FC<LottieScrollSectionProps> = ({
  settings,
  height,
  animationPosition = "center",
  debugMode = false,
}) => {
  if (!settings.initialSegment) {
    throw new Error(
      "LottieScrollSection needs the initialSegment property in settings object!"
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
    settings.initialSegment
  );

  useEffect(() => {
    if (!lottieContainerRef.current) return;

    if (!anim) {
      const newAnim = lottie.loadAnimation({
        container: lottieContainerRef.current,
        ...settings,
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

  const getAnimPosition = (): SystemProps["justifyContent"] => {
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
    <Flex
      ref={sectionRef}
      justify={getAnimPosition()}
      border={debugMode ? "1px solid red" : undefined}
      w="full"
      h={height}
      pos="relative"
    >
      <Box
        ref={lottieContainerRef}
        w="full"
        h="100vh"
        pos="sticky"
        top="0"
        border={debugMode ? "1px solid blue" : undefined}
      />
    </Flex>
  );
};

export default LottieScrollSection;
