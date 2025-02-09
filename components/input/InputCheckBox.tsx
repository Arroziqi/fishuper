import { CustomColors } from "@/constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ThemedText";

interface InputCheckboxProps {
  boxColor?: string;
  label?: string;
  strongLabel?: string;
  onChange?: (isChecked: boolean) => void;
}

const InputCheckbox: React.FC<InputCheckboxProps> = ({
  boxColor = CustomColors.primaryColor,
  label = "",
  strongLabel = "",
  onChange,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handlePress = () => {
    setIsChecked(!isChecked);
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <View
        style={[
          styles.checkbox,
          {
            borderColor: boxColor,
            backgroundColor: isChecked ? boxColor : "transparent",
          },
        ]}
      >
        {isChecked && (
          <MaterialIcons
            name="check"
            size={10}
            color={isChecked ? "#fff" : boxColor}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <ThemedText style={[styles.label, { color: boxColor }]}>
          {label}
        </ThemedText>
        <ThemedText style={[styles.strongLabel, { color: boxColor }]}>
          {strongLabel}
        </ThemedText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 2,
    marginRight: 7,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
  },
  strongLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textContainer: {
    flexDirection: "row",
  },
});

export default InputCheckbox;
