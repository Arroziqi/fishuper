import {
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";
import SmallButton from "../button/SmallButton";
import { ThemedText } from "../ThemedText";
import { CardProps } from "./Card";

interface CardWithButtonProps extends CardProps {
  textButton: string;
  onPress?: () => void;
  imageStyle?: StyleProp<ImageStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  color?: string;
}

export default function CardWithButton({
  title,
  image = require("@/assets/images/illustrations/customer-service-right.png"),
  subTitle,
  textButton,
  imageStyle,
  contentStyle,
  backgroundColor = "white",
  color = "black",
  onPress = () => {},
}: CardWithButtonProps) {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image source={image} style={[styles.image, imageStyle]} />
      <View style={[styles.content, contentStyle]}>
        <ThemedText style={{ color }} type="title">
          {title}
        </ThemedText>
        <ThemedText style={{ color }}>{subTitle}</ThemedText>
        <SmallButton
          style={styles.button}
          textStyles={styles.textStyle}
          text={textButton}
          onPress={onPress}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 14,
    padding: 16,
  },
  image: {
    position: "absolute",
    right: -31,
    bottom: 0,
    height: 193,
    width: 116,
    resizeMode: "contain",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {},
  content: {
    gap: 7,
  },
});
