import { Avatar } from "@/components/Avatar";
import { CustomeSearchBar } from "@/components/CustomSearchBar";
import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { CustomColors } from "@/constants/Colors";
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
        <View style={styles.profile}>
          <Avatar source={avatar} />
          <View style={styles.textAvatarContainer}>
            <ThemedText style={styles.textAvatar}>Selamat datang,</ThemedText>
            <ThemedText style={styles.textAvatar} type="title">
              {role === "fisherman"
                ? "FISHERMAN (NELAYAN)"
                : "FISHERER (DISTRIBUTOR)"}
            </ThemedText>
          </View>
        </View>
        {/* <SearchBar /> */}
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
  profile: {
    flexDirection: "row",
    gap: 7,
  },
  textAvatarContainer: {},
  textAvatar: {
    color: CustomColors.blue,
  },
  text: {},
  sliderContainer: {},
  slider: {},
});
