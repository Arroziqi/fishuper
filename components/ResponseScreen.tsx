import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import RadialGradientBackground from "./RadialGradientBackground";
import { ThemedText } from "./ThemedText";

interface ResponseScreenProps {
  title: string;
  image?: ImageSourcePropType;
  description: string;
}

export default function ResponseScreen({
  title,
  image = require("@/assets/images/icons/success.png"),
  description,
}: ResponseScreenProps) {
  const router = useRouter();

  return (
    <RadialGradientBackground startColor="#ff9a9e" endColor="#fad0c4">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.push("/(tabs)/(home)")}
        >
          <MaterialIcons name="close" size={24} color="black" />
        </TouchableOpacity>
        <ThemedText type="heading" style={styles.title}>
          {title}
        </ThemedText>
        <Image source={image} style={styles.image} />
        <ThemedText style={styles.description}>{description}</ThemedText>
      </View>
    </RadialGradientBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 62,
    padding: 34,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
  },
  title: {
    color: "black",
    textAlign: "center",
  },
  image: {
    width: 248,
    height: 248,
    resizeMode: "contain",
  },
  description: {
    color: "black",
    textAlign: "center",
  },
});
