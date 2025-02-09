import { useThemeColor } from "@/hooks/useThemeColor";
import { StyleSheet, Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "label"
    | "textButton"
    | "textButtonRegular"
    | "default"
    | "defaultSemiBold"
    | "defaultBold"
    | "title"
    | "subtitle"
    | "title2"
    | "subtitle2"
    | "heading"
    | "headingRegular"
    | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "label" && styles.label,
        type === "textButton" && styles.textButton,
        type === "textButtonRegular" && styles.textButtonRegular,
        type === "default" && styles.default,
        type === "defaultSemiBold" && styles.defaultSemiBold,
        type === "defaultBold" && styles.defaultBold,
        type === "title" && styles.title,
        type === "subtitle" && styles.subtitle,
        type === "title2" && styles.title2,
        type === "subtitle2" && styles.subtitle2,
        type === "heading" && styles.heading,
        type === "headingRegular" && styles.headingRegular,
        type === "link" && styles.link,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    lineHeight: 15,
  },
  textButton: {
    fontSize: 14,
    fontWeight: "900",
  },
  textButtonRegular: {
    fontSize: 14,
    fontWeight: "400",
  },
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  defaultBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "900",
    lineHeight: 27,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "400",
  },
  title2: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 23,
  },
  subtitle2: {
    fontSize: 16,
    fontWeight: "400",
  },
  heading: {
    fontSize: 32,
    fontWeight: "900",
    lineHeight: 37,
  },
  headingRegular: {
    fontSize: 32,
    fontWeight: "400",
    lineHeight: 37,
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
  },
});
