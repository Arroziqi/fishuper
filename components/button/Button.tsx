import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";

export type ButtonProps = {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
  textStyles?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

export function Button({
  onPress = () => {},
  style,
  text,
  disabled = false,
  textStyles,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={style}
      {...rest}
    >
      <ThemedText
        style={textStyles}
        type="textButtonRegular"
        lightColor="white"
      >
        {text}
      </ThemedText>
    </TouchableOpacity>
  );
}
