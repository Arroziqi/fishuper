import { CustomColors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, TextInput } from "react-native";
import Modal, { ModalProps } from "./Modal";

interface ModalWithInputProps extends ModalProps {
  placeholder?: string;
  value?: string;
  onChange?: (input: string) => void;
}

export default function ModalWithInput({
  title,
  placeholder,
  textButton,
  onPress = () => {},
  isOpen = false,
  setIsOpen = () => {},
  value,
  onChange,
}: ModalWithInputProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      title={title}
      textButton={textButton}
      onPress={onPress}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="rgba(0, 0, 0, 0.4)"
        textAlign="center"
        value={value}
        onChangeText={onChange}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: CustomColors.secondaryColor,
    width: "100%",
    paddingHorizontal: 10,
    textAlign: "center",
  },
});
