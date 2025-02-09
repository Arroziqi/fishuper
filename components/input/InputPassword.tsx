import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export interface InputPasswordProps {
  value: string;
  onChangeText: (text: string) => void;
  color?: string;
  borderColor?: string;
  placeholder?: string;
}

export function InputPassword({
  value,
  onChangeText,
  color = "white",
  borderColor = "white",
  placeholder = "Password",
}: InputPasswordProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={[styles.inputContainer, { borderColor }]}>
      <MaterialIcons name="lock" size={24} color={color} />
      <TextInput
        style={[styles.input, { color }]}
        placeholder={placeholder}
        placeholderTextColor={color}
        secureTextEntry={!showPassword}
        value={value}
        onChangeText={onChangeText}
      />
      <TouchableOpacity onPress={toggleShowPassword}>
        <MaterialIcons
          name={showPassword ? "visibility" : "visibility-off"}
          size={24}
          color={color}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
    borderWidth: 5,
    borderRadius: 74,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
});
