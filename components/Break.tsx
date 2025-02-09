import { View } from "react-native";

interface BreakProps {
  height?: number;
}

export function Break({ height = 10 }: BreakProps) {
  return <View style={{ height }} />;
}
