import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { ThemedText } from "../ThemedText";
import SmallButton from "../button/SmallButton";

export interface ModalProps {
  title: string;
  textButton: string;
  onPress?: () => void;
  isOpen?: boolean;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children?: React.ReactNode;
}

export default function Modal({
  title,
  textButton,
  onPress = () => {},
  isOpen = false,
  setIsOpen = () => {},
  children,
}: ModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.modalContainer}>
        <View style={styles.header}>
          <MaterialIcons
            name="close"
            size={24}
            onPress={() => setIsOpen(false)}
          />
          <ThemedText type="title" style={styles.headerText}>
            {title}
          </ThemedText>
        </View>
        <View style={styles.bodyContainer}>{children}</View>
        <View style={styles.footer}>
          <SmallButton
            textStyles={styles.textButton}
            style={styles.button}
            text={textButton}
            onPress={onPress}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 40,
  },
  modalContainer: {
    borderRadius: 38,
    overflow: "hidden",
    backgroundColor: "white",
    opacity: 1,
    padding: 20,
  },
  header: {
    width: "100%",
    paddingVertical: 18,
    paddingHorizontal: 10,
    flexDirection: "row",
  },
  headerText: {
    textAlign: "center",
    flex: 1,
  },
  bodyContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  footer: {
    paddingVertical: 25,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignSelf: "center",
  },
  textButton: {},
});
