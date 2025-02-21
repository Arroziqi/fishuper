import Boxshadow from "@/components/Boxshadow";
import SmallButton from "@/components/button/SmallButton";
import { CardWithButtonProps } from "@/components/card/CardWithButton";
import { ThemedText } from "@/components/ThemedText";
import { Image, StyleSheet, View } from "react-native";

interface DiscountCardProps extends CardWithButtonProps {
  buttonColor?: string;
}

export default function DiscountCard({
  title,
  subTitle,
  textButton,
  backgroundColor,
  buttonColor,
}: DiscountCardProps) {
  return (
    <Boxshadow style={[styles.container, { backgroundColor }]}>
      <Image
        style={styles.image}
        source={require("@/assets/images/illustrations/nemo.png")}
      />
      <View style={styles.content}>
        <ThemedText type="title2" style={styles.title}>
          {title}
        </ThemedText>
        <ThemedText type="label" style={styles.subTitle}>
          {subTitle}
        </ThemedText>
        <SmallButton
          style={[styles.button, { backgroundColor: buttonColor }]}
          text={textButton}
        />
      </View>
    </Boxshadow>
  );
}

const styles = StyleSheet.create({
  container: {
    boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.25)",
    width: 242,
    height: 120,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 17,
    justifyContent: "center",
  },
  image: {
    width: 111,
    height: 87,
    resizeMode: "contain",
    position: "absolute",
    zIndex: 10,
    right: -23,
  },
  content: {
    width: 127,
    gap: 10,
  },
  title: {},
  subTitle: {},
  button: {
    alignSelf: "center",
    borderRadius: 7,
    paddingHorizontal: 15,
    paddingVertical: 3,
    boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
  },
});
