import { FooterView } from "@/components/FooterView";
import { ThemedText } from "@/components/ThemedText";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function AboutScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <LinearGradient
          colors={["white", "white"]}
          style={styles.linearGradient}
        >
          <ToggleMenu
            onPress={() => {
              router.push("/landing/menu");
            }}
            color={CustomColors.primaryColor}
          />
          <Image
            source={require("@/assets/images/logo.png")}
            style={styles.image}
          />
          <ThemedText style={styles.text1}>Tentang</ThemedText>
          <ThemedText style={styles.text2}>Kami</ThemedText>
          <ThemedText style={styles.text3}>
            Aplikasi pasar ikan laut segar
          </ThemedText>
          <Footer />
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Footer: React.FC = () => {
  return (
    <FooterView
      backgroundColors={[
        CustomColors.primaryColor,
        CustomColors.secondaryColor,
      ]}
      style={styles.footer}
    >
      <ThemedText style={styles.text}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, quos
        molestiae voluptate in dicta alias vel ratione asperiores perspiciatis!
        Pariatur, dolorem, repellat, provident illo aut cupiditate unde eum
        voluptate non optio laudantium perferendis animi vitae.
      </ThemedText>
      <TouchableOpacity>
        <Link href={"/landing"} style={styles.link}>
          Back to Log In
        </Link>
      </TouchableOpacity>
    </FooterView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  linearGradient: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
  },
  text1: {
    color: "#002E86",
    fontWeight: "900",
    fontSize: 48,
    lineHeight: 48,
  },
  text2: {
    color: "#002E86",
    fontWeight: "regular",
    fontSize: 48,
    lineHeight: 48,
  },
  text3: {
    color: "#002E86",
    fontWeight: "regular",
    fontSize: 20,
    lineHeight: 20,
  },
  footer: {
    gap: 7,
    paddingVertical: 24,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  link: {
    color: "#fff",
    fontSize: 24,
  },
});
