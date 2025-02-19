import Card, { CardProps } from "@/components/card/Card";
import HorizontalScroll from "@/components/HorizontalScroll";
import { StyleProp, ViewStyle } from "react-native";

const model: CardProps[] = [
  {
    title: "Senin",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
  {
    title: "Selasa",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
  {
    title: "Rabu",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
];

interface WeatherSliderProps {
  style?: StyleProp<ViewStyle>;
}

export default function WeatherSlider({ style }: WeatherSliderProps) {
  return (
    <HorizontalScroll style={style}>
      {model.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          image={item.image}
          subTitle={item.subTitle}
        />
      ))}
    </HorizontalScroll>
  );
}
