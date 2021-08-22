import { RefObject } from "react";
import getTopPosition from "./getTopDistance";

const getTotalViewport = (ref: RefObject<HTMLDivElement>, height: number): number => {
  return getTopPosition(ref) + (height - window.innerHeight);
};

export default getTotalViewport;