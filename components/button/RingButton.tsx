import { CustomColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "./Button";

export type RingButtonProps = ButtonProps & {
  borderColor?: string;
  textColor?: string;
  backgroundColor?: string;
};

export function RingButton({
  borderColor = CustomColors.primaryColor,
  textColor = borderColor,
  backgroundColor = "white",
  onPress,
  ...props
}: RingButtonProps) {
  return (
    <Button
      {...props}
      onPress={onPress}
      style={[styles.button, props.style, { borderColor, backgroundColor }]}
      textStyles={[styles.text, props.textStyles, { color: textColor }]}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 16,
    borderRadius: 74,
    borderWidth: 5,
  },
  text: {
    fontSize: 24,
  },
});
