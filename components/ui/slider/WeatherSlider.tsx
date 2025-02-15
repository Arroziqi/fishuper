import { Break } from "@/components/Break";
import Card, { CardProps } from "@/components/card/Card";
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from "react-native";

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
  {
    title: "Kamis",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
  {
    title: "Jumat",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
  {
    title: "Sabtu",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
  {
    title: "Minggu",
    image: require("@/assets/images/illustrations/partly-cloudy.png"),
    subTitle: "Cerah Berawan",
  },
];

interface WeatherSliderProps {
  style?: StyleProp<ViewStyle>;
}

export default function WeatherSlider({ style }: WeatherSliderProps) {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={[styles.scrollView, style]}
    >
      <View style={styles.container}>
        <Break width={20} />
        {model.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            image={item.image}
            subTitle={item.subTitle}
          />
        ))}
        <Break width={20} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 7,
  },
  scrollView: {},
});
