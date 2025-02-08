import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ViewProps } from "react-native";
import { ThemedView } from "./ThemedView";

type HeaderViewProps = ViewProps & {
  backgroundColors?: any;
  children?: React.ReactNode;
};

export function HeaderView({
  backgroundColors = [CustomColors.secondaryColor, CustomColors.primaryColor],
  children,
  ...rest
}: HeaderViewProps) {
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
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "absolute",
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    padding: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 20,
    elevation: 20,
  },
  container: {
    width: "100%",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
});
