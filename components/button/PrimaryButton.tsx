import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "./Button";

export type PrimaryButtonProps = ButtonProps & {
  colors?: readonly [string, string, ...string[]];
};

export function PrimaryButton({
  colors = ["#5A75A9", "#2851A0"],
  onPress,
  ...props
}: PrimaryButtonProps) {
  return (
    <LinearGradient
      colors={colors}
      style={styles.linearGradient}
      start={[0, 0]}
      end={[1, 0]}
    >
      <Button
        {...props}
        onPress={onPress}
        style={[styles.button, props.style]}
        textStyles={styles.text}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    borderRadius: 74,
  },
  button: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 16,
  },
  text: {
    fontSize: 24,
  },
});
