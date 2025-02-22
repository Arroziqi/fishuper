import {
  ColorValue,
  DimensionValue,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";

interface DividerProps {
  width?: DimensionValue;
  height?: DimensionValue;
  color?: ColorValue;
  style?: StyleProp<ViewStyle>;
}

export default function Divider({
  width = "100%",
  height = 1,
  color = "black",
  style,
}: DividerProps) {
  return <View style={[{ width, height, backgroundColor: color }, style]} />;
}
