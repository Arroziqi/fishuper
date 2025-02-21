import Card, { CardProps } from "@/components/card/Card";
import { CustomeSearchBar } from "@/components/CustomSearchBar";
import Profile from "@/components/header/Profile";
import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import DiscountSlider from "../slider/DiscountSlider";

interface TopBarFisheriesProps {
  avatar?: ImageSourcePropType | undefined;
}

export function TopBarFisheries({ avatar }: TopBarFisheriesProps) {
  const model: CardProps[] = [
    {
      image: require("@/assets/images/illustrations/blowfish.png"),
      subTitle: "Ikan Segar",
    },
    {
      image: require("@/assets/images/illustrations/processed-fish.png"),
      subTitle: "Olahan Ikan",
    },
    {
      image: require("@/assets/images/illustrations/fish-fillet.png"),
      subTitle: "Ikan Fillet",
    },
  ];
  const [query, setQuery] = useState<string>("");
  return (
    <HeaderView backgroundColors={["white", "white"]} style={styles.headerView}>
    <View style={styles.container}>
        <Profile role={"fisheries"} avatar={avatar} />
        <CustomeSearchBar query={query} setQuery={setQuery} />
      </View>
      <View style={styles.sliderContainer}>
        <DiscountSlider style={styles.slider} />
      </View>
      <View style={styles.productContainer}>
        <ThemedText>Kategori Produk</ThemedText>
        <View style={styles.product}>
          {model.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              subTitle={item.subTitle}
              style={styles.card}
              backgroundColor="white"
              color="black"
            />
          ))}
        </View>
      </View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 20,
  },
  headerView: {
    gap: 10,
    paddingHorizontal: 0,
    position: "relative",
    paddingBottom: 20,
  },
  text: {},
  sliderContainer: {
    paddingVertical: 10,
  },
  slider: {
    overflow: "visible",
  },
  productContainer: {
    gap: 9,
    paddingHorizontal: 20,
  },
  product: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    borderWidth: 1,
    paddingVertical: 15,
  },
});
