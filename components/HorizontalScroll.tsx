import React from "react";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { Break } from "./Break";

interface HorizontalScrollProps {
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  paddingX?: number;
  children: React.ReactNode;
}

export default function HorizontalScroll({
  style,
  contentStyle,
  paddingX = 20,
  children,
}: HorizontalScrollProps) {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollView, style]}
    >
      <View style={[styles.container, contentStyle]}>
        <Break width={paddingX} />
        {children}
        <Break width={paddingX} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 7,
  },
  scrollView: {},
});
