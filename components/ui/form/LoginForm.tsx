import { InputPassword } from "@/components/input/InputPassword";
import { InputWithIcon } from "@/components/input/InputWithIcon";
import React from "react";
import { StyleSheet, View } from "react-native";

interface LoginFormProps {
  email: string;
  password: string;
  setEmail: (text: string) => void;
  setPassword: (text: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  email,
  password,
  setEmail,
  setPassword,
}: LoginFormProps) => {
  return (
    <View style={styles.container}>
      <InputWithIcon
        icon="email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <InputPassword value={password} onChangeText={setPassword} />
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
    borderBottomColor: "gray",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 10,
  },
});

export default LoginForm;
