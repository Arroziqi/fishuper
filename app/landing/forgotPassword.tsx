import { Break } from "@/components/Break";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { FooterView } from "@/components/FooterView";
import { InputWithIcon } from "@/components/input/InputWithIcon";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import { CustomColors } from "@/constants/Colors";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <LinearGradient colors={["white", "white"]} style={styles.linearGradient}>
        <ToggleMenu
          onPress={() => {
            router.push("/landing/menu");
          }}
          color={CustomColors.primaryColor}
        />
        <ThemedView style={styles.content}>
          <Image
            source={require("@/assets/images/icons/padlock.png")}
            style={styles.image}
          />
          <ThemedText style={styles.text1}>Forgot</ThemedText>
          <ThemedText style={styles.text2}>Password?</ThemedText>
          <ThemedText style={styles.text3}>
            No worries, we'll send you {"\n"}reset instructions
          </ThemedText>
        </ThemedView>
        <Footer />
      </LinearGradient>
    </KeyboardAwareScrollView>
  );
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  return (
    <FooterView
      backgroundColors={[
        CustomColors.primaryColor,
        CustomColors.secondaryColor,
      ]}
      style={styles.footer}
    >
      <InputWithIcon
        icon="mail"
        placeholder="Masukan alamat email Anda"
        value={email}
        onChangeText={setEmail}
        borderColor={CustomColors.gold}
      />
      <Break />
      <PrimaryButton
        text="Reset Password"
        colors={[CustomColors.gold, CustomColors.gold]}
        borderRadius={6}
        textStyles={styles.textButton}
      />
      <Break height={30} />
      <TouchableOpacity>
        <Link href={"/landing"} style={styles.link}>
          Back to Log In
        </Link>
      </TouchableOpacity>
    </FooterView>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: 50,
    flex: 1,
    position: "relative",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 73,
    aspectRatio: 1 / 1.4,
    resizeMode: "contain",
  },
  text: {
    color: "#fff",
  },
  text1: {
    color: "#002E86",
    fontWeight: "900",
    fontSize: 48,
    lineHeight: 52,
    marginTop: 20,
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
    lineHeight: 24,
    textAlign: "center",
    marginTop: 10,
  },
  footer: {
    gap: 7,
    paddingTop: 40,
    paddingVertical: 30,
    paddingHorizontal: 40,
    alignItems: "center",
    position: "relative",
    bottom: 0,
  },
  link: {
    color: "#fff",
    fontSize: 16,
  },
  textButton: {
    color: CustomColors.primaryColor,
  },
});
