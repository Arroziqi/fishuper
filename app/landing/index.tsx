import { PrimaryButton } from "@/components/button/PrimaryButton";
import { RingButton } from "@/components/button/RingButton";
import { FooterView } from "@/components/FooterView";
import { ThemedText } from "@/components/ThemedText";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import LoginForm from "@/components/ui/form/LoginForm";
import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from "react-native";

export default function LandingScreen() {
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
          colors={[
            CustomColors.darkBlue,
            CustomColors.blue,
            CustomColors.lightBlue,
          ]}
          style={styles.linearGradient}
        >
          <ToggleMenu />
          <Image
            source={require("@/assets/images/logo-onboarding.png")}
            style={styles.image}
          />
          <Image
            source={require("@/assets/images/text-logo.png")}
            style={styles.textImage}
          />
          <ThemedText style={styles.text} type="subtitle">
            Fish supply and demand
          </ThemedText>
          <LoginForm
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
          />
          <Footer />
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const Footer: React.FC = () => {
  return (
    <FooterView backgroundColors={["white", "white"]} style={styles.footer}>
      <ThemedText>Lupa Password?</ThemedText>
      <PrimaryButton text="Masuk" onPress={() => {}} />
      <ThemedText>atau</ThemedText>
      <RingButton text="Buat Akun Baru" onPress={() => {}} />
    </FooterView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  linearGradient: {
    paddingTop: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 324.33,
    height: 333.82,
    resizeMode: "contain",
  },
  textImage: {
    width: 208,
    height: 55,
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
  },
  footer: {
    gap: 7,
    paddingVertical: 17,
    paddingHorizontal: 40,
    alignItems: "center",
  },
});
