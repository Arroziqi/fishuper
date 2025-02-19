import { CustomeSearchBar } from "@/components/CustomSearchBar";
import Profile from "@/components/header/Profile";
import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import WeatherSlider from "../slider/WeatherSlider";

interface TopBarProps {
  role: string;
  avatar?: ImageSourcePropType | undefined;
}

export function TopBar({ role, avatar }: TopBarProps) {
  const [query, setQuery] = useState<string>("");
  return (
    <HeaderView backgroundColors={["white", "white"]} style={styles.headerView}>
      <View style={styles.container}>
        <Profile role={role} avatar={avatar} />
        <CustomeSearchBar query={query} setQuery={setQuery} />
        <ThemedText type="title2" style={styles.text}>
          Prakiraan Cuaca
        </ThemedText>
      </View>
      <View style={styles.sliderContainer}>
        <WeatherSlider style={styles.slider} />
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
  },
  text: {},
  sliderContainer: {},
  slider: {},
});
