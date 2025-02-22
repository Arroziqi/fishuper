import Boxshadow from "@/components/Boxshadow";
import { ThemedText } from "@/components/ThemedText";
import { CustomColors } from "@/constants/Colors";
import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";
import AddRemoveButton from "../button/AddRemoveButton";

interface ProductCardProps {
  title: string;
  price: number;
  image?: ImageSourcePropType;
}

export default function ProductCard({
  title,
  price,
  image = require("@/assets/images/illustrations/fish.png"),
}: ProductCardProps) {
  return (
    <Boxshadow style={[styles.container]}>
      <Image style={styles.image} source={image} />
      <View style={styles.content}>
        <ThemedText type="title2" style={styles.title}>
          {title}
        </ThemedText>
        <View className="flex-row gap-[16px]">
          {label("Premium")}
          {label("Fresh")}
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <ThemedText type="label">Rp100/gr</ThemedText>
            <AddRemoveButton />
          </View>
          <View style={styles.price}>
            <ThemedText type="label">Rp90.000/gr</ThemedText>
            <AddRemoveButton />
          </View>
        </View>
      </View>
    </Boxshadow>
  );
}

const label = (text: string) => (
  <View
    className="w-[72px] h-[28px] rounded-[7px] justify-center items-center"
    style={{ backgroundColor: CustomColors.blue }}
  >
    <ThemedText type="textButton" lightColor="white">
      {text}
    </ThemedText>
  </View>
);

const styles = StyleSheet.create({
  container: {
    boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.25)",
    paddingHorizontal: 10,
    paddingVertical: 12,
    borderRadius: 17,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    gap: 14,
  },
  image: {
    width: 96,
    height: 96,
    resizeMode: "contain",
  },
  content: {
    flex: 1,
    gap: 10,
  },
  title: {},
  priceContainer: {
    flexDirection: "row",
    gap: 28,
  },
  price: {
    alignItems: "center",
    gap: 3,
  },
});
