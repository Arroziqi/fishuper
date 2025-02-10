import { View } from "react-native";

interface BreakProps {
  height?: number;
  width?: number;
}

export function Break({ height = 10, width = 10 }: BreakProps) {
  return <View style={{ height, width }} />;
}
