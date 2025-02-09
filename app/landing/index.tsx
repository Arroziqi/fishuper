import { PrimaryButton } from "@/components/button/PrimaryButton";
import { RingButton } from "@/components/button/RingButton";
import { FooterView } from "@/components/FooterView";
import { ThemedText } from "@/components/ThemedText";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import LoginForm from "@/components/ui/form/LoginForm";
import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function LandingScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient
        colors={[
          CustomColors.darkBlue,
          CustomColors.blue,
          CustomColors.lightBlue,
        ]}
        style={styles.linearGradient}
      >
        <ToggleMenu
          onPress={() => {
            router.push("/landing/menu");
          }}
        />
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
    </KeyboardAwareScrollView>
  );
}

const Footer: React.FC = () => {
  return (
    <FooterView backgroundColors={["white", "white"]} style={styles.footer}>
      <Link href={"/landing/forgotPassword"}>
        <ThemedText>Lupa Password?</ThemedText>
      </Link>
      <PrimaryButton text="Masuk" onPress={() => {}} />
      <ThemedText>atau</ThemedText>
      <RingButton
        text="Buat Akun Baru"
        onPress={() => {
          router.push("/landing/signup");
        }}
      />
    </FooterView>
  );
};

const styles = StyleSheet.create({
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
    position: "relative",
  },
});
