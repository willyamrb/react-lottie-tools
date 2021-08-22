import { RefObject } from "react";

const getTopPosition = (ref: RefObject<HTMLDivElement>): number => {
  if (!ref.current) return 0;
  
  const element = ref.current;

  const distance = window.pageYOffset + element.getBoundingClientRect().top;
  return distance;
};

export default getTopPosition;
