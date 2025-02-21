import { CardProps } from "@/components/card/Card";
import HorizontalScroll from "@/components/HorizontalScroll";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import DiscountCard from "../card/DiscountCard";

const model: CardProps[] = [
  {
    title: "Promo A",
    image: require("@/assets/images/illustrations/nemo.png"),
    subTitle: "Keterangan Promo",
  },
  {
    title: "Promo B",
    image: require("@/assets/images/illustrations/nemo.png"),
    subTitle: "Keterangan Promo",
  },
  {
    title: "Promo C",
    image: require("@/assets/images/illustrations/nemo.png"),
    subTitle: "Keterangan Promo",
  },
];

interface DiscountSliderProps {
  style?: StyleProp<ViewStyle>;
}

export default function DiscountSlider({ style }: DiscountSliderProps) {
  return (
    <HorizontalScroll
      contentStyle={styles.content}
      style={[style, styles.container]}
    >
      {model.map((item, index) => (
        <DiscountCard
          key={item.title}
          title={item.title}
          image={item.image}
          subTitle={item.subTitle}
          textButton={"Order Now"}
          backgroundColor={index % 2 === 0 ? "#83A3E1" : "#FFD986"}
          buttonColor={index % 2 === 0 ? "#002E86" : "#FFAF00"}
        />
      ))}
    </HorizontalScroll>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "visible",
  },
  content: {
    gap: 17,
  },
});
