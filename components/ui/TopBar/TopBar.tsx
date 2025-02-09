import { Avatar } from "@/components/Avatar";
import { CustomeSearchBar } from "@/components/CustomSearchBar";
import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { ImageSourcePropType, StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-screens";

interface TopBarProps {
  role: string;
  avatar?: ImageSourcePropType | undefined;
}

export function TopBar({ role, avatar }: TopBarProps) {
  const [query, setQuery] = useState<string>("");
  return (
    <HeaderView style={styles.headerView}>
      <View style={styles.profile}>
        <Avatar source={avatar} />
        <View style={styles.textAvatarContainer}>
          <ThemedText style={styles.textAvatar}>Selamat datang,</ThemedText>
          <ThemedText style={styles.textAvatar} type="title">
            {role === "nelayan"
              ? "FISHERMAN (NELAYAN)"
              : "FISHERER (DISTRIBUTOR)"}
          </ThemedText>
        </View>
        <SearchBar />
        <CustomeSearchBar query={query} setQuery={setQuery} />
        <ThemedText type="title2" style={styles.text}>
          Prakiraan Cuaca
        </ThemedText>
      </View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({
  headerView: {},
  profile: {},
  textAvatarContainer: {},
  textAvatar: {},
  text: {},
  sliderContainer: {},
  slideItem: {},
});
