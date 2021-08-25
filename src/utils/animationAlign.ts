const horizontalPositions = {
  center: "center",
  left: "flex-start",
  right: "flex-end",
};

const verticalPositions = {
  center: "center",
  top: "flex-start",
  bottom: "flex-end",
};

export const getHorizontalAnimPosition = (
  position: "center" | "left" | "right"
) => horizontalPositions[position];

export const getVerticalAnimPosition = (position: "center" | "top" | "bottom") =>
  verticalPositions[position];
