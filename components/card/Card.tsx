import { CustomColors } from "@/constants/Colors";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ThemedText } from "../ThemedText";

export interface CardProps {
  title?: string;
  image?: ImageSourcePropType;
  subTitle?: string;
  description?: string;
  style?: ViewStyle;
  backgroundColor?: string;
  color?: string;
  onPress?: () => void;
}

export default function Card({
  title,
  image = require("@/assets/images/illustrations/partly-cloudy.png"),
  subTitle,
  description,
  style,
  backgroundColor = CustomColors.primaryColor,
  color = "white",
  onPress = () => {},
}: CardProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[style, styles.container, { backgroundColor }]}>
        {title && (
          <ThemedText style={[styles.text, { color }]}>{title}</ThemedText>
        )}
        <Image source={image} style={styles.image} />
        {subTitle && (
          <ThemedText style={[styles.text2, { color }]}>{subTitle}</ThemedText>
        )}
        {description && (
          <ThemedText type="label" style={[{ color }]}>
            {description}
          </ThemedText>
        )}
      </View>
    </TouchableOpacity>
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
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    fontWeight: "700",
  },
});
