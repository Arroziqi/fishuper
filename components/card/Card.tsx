import { CustomColors } from "@/constants/Colors";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";

export interface CardProps {
  title?: string;
  image?: ImageSourcePropType;
  subTitle?: string;
  style?: ViewStyle;
  backgroundColor?: string;
  color?: string;
}

export default function Card({
  title,
  image = require("@/assets/images/illustrations/partly-cloudy.png"),
  subTitle,
  style,
  backgroundColor = CustomColors.primaryColor,
  color = "white",
}: CardProps) {
  return (
    <View style={[style, styles.container, { backgroundColor }]}>
      {title && (
        <ThemedText style={[styles.text, { color }]}>{title}</ThemedText>
      )}
      <Image source={image} style={styles.image} />
      <ThemedText style={[styles.text2, { color }]}>{subTitle}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
    paddingHorizontal: 3,
    alignItems: "center",
    justifyContent: "space-around",
    gap: 7,
    borderRadius: 6,
    width: 97,
  },
  image: {
    height: 52,
    width: 75,
    resizeMode: "contain",
  },
  text: {
    textAlign: "center",
    color: "white",
  },
  text2: {
    textAlign: "center",
    color: "white",
    fontSize: 15,
    lineHeight: 15,
  },
});
