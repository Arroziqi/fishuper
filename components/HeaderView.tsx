import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, ViewProps } from "react-native";

type HeaderViewProps = ViewProps & {
  backgroundColors?: any;
  children?: React.ReactNode;
};

export function HeaderView({
  backgroundColors = ["#4A7EE3", "#143F93", "#002E86"],
  children,
  ...rest
}: HeaderViewProps) {
  return (
    <LinearGradient
      colors={backgroundColors}
      style={[styles.LinearGradient, rest.style]}
    >
      {children}
    </LinearGradient>
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
