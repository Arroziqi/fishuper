import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface RowViewProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  gap?: number;
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
}

export default function RowView({
  children,
  style,
  gap,
  justifyContent,
}: RowViewProps) {
  return (
    <View style={[styles.container, style, { gap, justifyContent }]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});
