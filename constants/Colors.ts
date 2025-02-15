/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primaryColor = "#2851A0";
const secondaryColor = "#5990FA";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
};

export const CustomColors = {
  primaryColor,
  secondaryColor,
  darkBlue: "#0F1D3A",
  lightBlue: "#D9D9D9",
  seaBlue: "#5990FA",
  blue: "#002E86",
  gold: "#EAB11A",
  lightGold: "#FFF0C7",
  green: "#36FF94",
  red: "#FF0000",
  shadow: "#FDFDFD",
};
