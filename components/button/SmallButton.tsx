import { CustomColors } from "@/constants/Colors";
import { StyleSheet } from "react-native";
import { Button, ButtonProps } from "./Button";

export default function SmallButton(props: ButtonProps) {
  return (
    <Button
      style={[styles.container, props.style]}
      textStyles={[styles.text, props.textStyles]}
      text={props.text}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: CustomColors.primaryColor,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "Karla",
  },
});
