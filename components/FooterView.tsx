import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ViewProps } from "react-native";

type FooterViewProps = ViewProps & {
  backgroundColors?: any;
  children?: React.ReactNode;
};

export function FooterView({
  backgroundColors = [CustomColors.secondaryColor, CustomColors.primaryColor],
  children,
  ...rest
}: FooterViewProps) {
  return (
    <LinearGradient
      colors={backgroundColors}
      style={[styles.container, rest.style]}
    >
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    zIndex: 100,
    boxShadow: "0px 0px 40px 20px rgba(0,0,0,0.25)",
    position: "absolute",
    bottom: 0,
  },
});
