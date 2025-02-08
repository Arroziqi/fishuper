import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewProps,
} from "react-native";
import { ThemedText } from "../ThemedText";

export type ButtonProps = ViewProps & {
  onPress?: () => void;
  text: string;
  disabled?: boolean;
  textStyles?: StyleProp<TextStyle>;
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
