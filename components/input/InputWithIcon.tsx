import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

export interface InputWithIconProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  placeholder: string;
  secureTextEntry?: boolean;
  value: string;
  onChangeText: (text: string) => void;
  color?: string;
  borderColor?: string;
}

export function InputWithIcon({
  icon,
  placeholder,
  secureTextEntry = false,
  value,
  onChangeText,
  color = "white",
  borderColor = "white",
}: InputWithIconProps) {
  return (
    <View style={[styles.inputContainer, { borderColor }]}>
      <MaterialIcons name={icon} size={24} color={color} />
      <TextInput
        style={[styles.input, { color }]}
        placeholder={placeholder}
        placeholderTextColor={color}
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
      />
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
