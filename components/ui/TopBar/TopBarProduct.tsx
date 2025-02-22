import { Break } from "@/components/Break";
import { CustomeSearchBar } from "@/components/CustomSearchBar";
import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

interface TopBarProductProps {
  title: string;
}

export function TopBarProduct({ title }: TopBarProductProps) {
  const [query, setQuery] = useState<string>("");
  return (
    <HeaderView backgroundColors={["white", "white"]} style={styles.headerView}>
      <View style={styles.container}>
        <ThemedText style={styles.text}>Kategori Produk</ThemedText>
        <ThemedText type="heading">{title}</ThemedText>
        <Break height={10} />
        <CustomeSearchBar query={query} setQuery={setQuery} />
      </View>
    </HeaderView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 0,
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
