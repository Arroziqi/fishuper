import { ThemedText } from "@/components/ThemedText";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface TopBarCartProps {}

export function TopBarCart({}: TopBarCartProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <MaterialIcons
          name="keyboard-backspace"
          size={22}
          color={"rgba(0, 0, 0, 0.3)"}
        />
      </TouchableOpacity>
      <ThemedText type="headingRegular">Beli Sekarang</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 19,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    boxShadow: "0 7 199 3  rgba(0, 0, 0, 0.2)",
    zIndex: 100,
  },
});
