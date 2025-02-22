import { ThemedText } from "@/components/ThemedText";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface AddRemoveButtonProps {
  number?: number;
}

export default function AddRemoveButton({ number = 0 }: AddRemoveButtonProps) {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="remove-circle-outline" size={28} />
      </TouchableOpacity>
      <ThemedText>{number}</ThemedText>
      <TouchableOpacity style={styles.button}>
        <MaterialIcons name="add-circle-outline" size={28} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 7,
  },
  button: {
    alignSelf: "center",
  },
});
