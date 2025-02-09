import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

interface AvatarProps {
  source?: ImageSourcePropType | undefined;
}

export function Avatar({
  source = require("@/assets/images/avatar.png"),
}: AvatarProps) {
  return (
    <View style={styles.container}>
      <Image source={source} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    width: 46,
    aspectRatio: 1 / 1,
    borderRadius: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1 / 1,
    resizeMode: "contain",
  },
});
