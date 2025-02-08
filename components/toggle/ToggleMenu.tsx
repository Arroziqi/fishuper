import React from "react";
import { StyleSheet, TouchableOpacity, View, ViewProps } from "react-native";

type ToggleMenuProps = ViewProps & {
  active?: boolean;
  onPress?: () => void;
  color?: string;
};

export function ToggleMenu({
  active = false,
  onPress,
  color = "white",
  ...props
}: ToggleMenuProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, props.style]}>
      <View
        style={[styles.dot, { backgroundColor: active ? "white" : color }]}
      />
      <View
        style={[styles.dot, { backgroundColor: active ? "white" : color }]}
      />
      <View
        style={[styles.dot, { backgroundColor: active ? "white" : color }]}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 42,
    left: 34,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginHorizontal: 2,
  },
});
