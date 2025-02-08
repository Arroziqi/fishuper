import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";

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
    <ThemedView style={[styles.container]}>
      <LinearGradient
        colors={backgroundColors}
        style={[styles.LinearGradient, rest.style]}
      >
        {children}
      </LinearGradient>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  LinearGradient: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  container: {
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});
