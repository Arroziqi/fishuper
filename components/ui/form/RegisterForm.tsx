import { Break } from "@/components/Break";
import { PrimaryButton } from "@/components/button/PrimaryButton";
import InputCheckbox from "@/components/input/InputCheckBox";
import { InputPassword } from "@/components/input/InputPassword";
import { InputWithIcon } from "@/components/input/InputWithIcon";
import { CustomColors } from "@/constants/Colors";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

const RegisterForm: React.FC = ({}) => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [retypePassword, setRetypePassword] = useState<string>("");
  return (
    <View style={styles.container}>
      <InputWithIcon
        borderColor={CustomColors.primaryColor}
        color={CustomColors.primaryColor}
        icon="person"
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <InputWithIcon
        borderColor={CustomColors.primaryColor}
        color={CustomColors.primaryColor}
        icon="email"
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <InputPassword
        borderColor={CustomColors.primaryColor}
        color={CustomColors.primaryColor}
        value={password}
        onChangeText={setPassword}
      />
      <InputPassword
        borderColor={CustomColors.primaryColor}
        color={CustomColors.primaryColor}
        placeholder="Retype Password"
        value={retypePassword}
        onChangeText={setRetypePassword}
      />
      <InputCheckbox label="I agree to the " strongLabel="Tearms & Privacy" />

      <Break />
      <PrimaryButton
        colors={[CustomColors.gold, CustomColors.gold]}
        text="Continue"
        onPress={() => {
          router.push("/landing/role");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 40,
    width: "100%",
    gap: 11,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
  },
});

export default RegisterForm;
