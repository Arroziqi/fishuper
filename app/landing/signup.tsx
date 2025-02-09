import { HeaderView } from "@/components/HeaderView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { ToggleMenu } from "@/components/toggle/ToggleMenu";
import RegisterForm from "@/components/ui/form/RegisterForm";
import { CustomColors } from "@/constants/Colors";
import { Link, router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Signup: React.FC = () => {
  return (
    <KeyboardAwareScrollView
      style={{ flex: 1, backgroundColor: "white" }}
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
    >
      <ThemedView style={styles.container}>
        <Header />
        <ThemedView style={styles.content}>
          <RegisterForm />
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
      <ThemedText style={styles.text1}>Let's</ThemedText>
      <ThemedText style={styles.text2}>
        Create {"\n"}Your {"\n"}Account
      </ThemedText>
    </HeaderView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    paddingVertical: 20,
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
    fontWeight: "500",
    fontSize: 48,
    lineHeight: 48,
    fontFamily: "Inter",
  },
  text2: {
    color: "white",
    fontWeight: "bold",
    fontSize: 48,
    lineHeight: 48,
    fontFamily: "Inter",
  },
  link: {
    color: CustomColors.blue,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Signup;
