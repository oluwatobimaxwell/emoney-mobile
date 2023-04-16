import hexToRgba from "hex-to-rgba";
import { Platform, useColorScheme } from "react-native";
import { theme, colorsDark, colorsLight } from "../config/theme";

export const useAppTheme = () => {
  const colorScheme = useColorScheme();
  const colors = colorScheme === "dark" ? colorsDark : colorsLight;
  const isIOS = Platform.OS === "ios";
  return {
    ...theme,
    isIOS,
    colors,
    scheme: colorScheme,
    lightenBlack: (x: number) => hexToRgba(colors.black, x),
    lightenWhite: (x: number) => hexToRgba(colors.white, x),
    lightenPrimary: (x: number) => hexToRgba(colors.primary, x),
    lightenSecondary: (x: number) => hexToRgba(colors.secondary, x),
  };
};
