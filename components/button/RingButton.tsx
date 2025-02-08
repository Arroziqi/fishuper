import { CustomColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "./Button";

export type RingButtonProps = ButtonProps & {
  borderColor?: string;
};

export function RingButton({
  borderColor = CustomColors.primaryColor,
  onPress,
  ...props
}: RingButtonProps) {
  return (
    <Button
      {...props}
      onPress={onPress}
      style={[styles.button, props.style, { borderColor }]}
      textStyles={[styles.text, props.textStyles]}
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
    color: CustomColors.primaryColor,
  },
});
