import { Break } from "@/components/Break";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import { RingButton } from "@/components/button/RingButton";
import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import { CustomColors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Image, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Role: React.FC = () => {
  const [role, setRole] = useState<string>("");

  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <ThemedView style={styles.container}>
        <Header />
        <ThemedView style={styles.content}>
          <RingButton
            borderColor={role === "nelayan" ? CustomColors.gold : undefined}
            style={styles.ringButton}
            text="Nelayan/Supplier"
            onPress={() => {
              setRole("nelayan");
            }}
          />
          <RingButton
            borderColor={role === "mitra" ? CustomColors.gold : undefined}
            style={styles.ringButton}
            text="Mitra/Distributor"
            onPress={() => {
              setRole("mitra");
            }}
          />
          <RingButton
            borderColor={role === "pembeli" ? CustomColors.gold : undefined}
            style={styles.ringButton}
            text="Pembeli"
            onPress={() => {
              setRole("pembeli");
            }}
          />
          <Image
            source={require("@/assets/images/fish-role.png")}
            style={styles.image}
          />
          <PrimaryButton
            colors={[CustomColors.gold, CustomColors.gold]}
            text="Happy Fishing!"
          />
          <Break height={40} />
          <ThemedText style={{ color: CustomColors.primaryColor }}>
            Have an account?{" "}
            <Link href={"/landing"} style={styles.link}>
              Log In
            </Link>
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </KeyboardAwareScrollView>
  );
};

const Header: React.FC = () => {
  const isPresented = router.canGoBack();
  return (
    <HeaderView style={styles.topbar}>
      {isPresented && (
        <Link href={".."}>
          <ToggleMenu
            onPress={() => {
              router.push("/landing/menu");
            }}
            color={CustomColors.blue}
            active={true}
          />
        </Link>
      )}
      <ThemedText type="heading" style={styles.text1}>
        Jelajah FishUPER sebagai
      </ThemedText>
      <ThemedText style={styles.text2}>
        Pilih kategori yang cocok dengan Anda dan rasakan manfaat bergabung
        dengan FishUPER
      </ThemedText>
    </HeaderView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 20,
    padding: 40,
    position: "relative",
  },
  topbar: {
    justifyContent: "space-between",
    gap: 2,
    paddingBottom: 24,
    position: "relative",
  },
  text1: {
    marginTop: 20,
    color: "white",
    fontFamily: "Inter",
  },
  text2: {
    color: "white",
    fontFamily: "Inter",
  },
  link: {
    color: CustomColors.blue,
    fontSize: 16,
    fontWeight: "bold",
  },
  ringButton: {
    marginVertical: 7,
  },
  image: {
    marginTop: 10,
    height: 100,
    aspectRatio: 1.6 / 1,
    resizeMode: "contain",
  },
});

export default Role;
