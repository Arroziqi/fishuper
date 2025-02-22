import ProductCard from "@/components/ui/card/ProductCard";
import { TopBarProduct } from "@/components/ui/TopBar/TopBarProduct";
import { CustomColors } from "@/constants/Colors";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";

interface ProductScreenProps {}

export default function ProductScreen() {
  const { id } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <TopBarProduct title={"IKAN SEGAR"} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <ProductCard title={"Nyonya pudd"} price={0} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CustomColors.seaBlue,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: "center",
    gap: 20,
  },
});
