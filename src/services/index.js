import { PixelRatio } from "react-native";

export const getSizeMultiplication = (value, factor) => {
  return PixelRatio.roundToNearestPixel(value * factor);
};
