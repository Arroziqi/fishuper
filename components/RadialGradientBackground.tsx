import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

interface RadialGradientBackgroundProps {
  children: React.ReactNode;
  startColor?: string;
  endColor?: string;
}

const RadialGradientBackground = ({
  children,
}: RadialGradientBackgroundProps) => {
  return (
    <ImageBackground
      style={styles.container}
      resizeMode="cover"
      source={require("@/assets/images/bg-radial-success.png")}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RadialGradientBackground;
