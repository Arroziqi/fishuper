import { StyleSheet, ViewStyle } from "react-native";
import { InputWithIcon } from "./input/InputWithIcon";

interface CustomeSearchBarProps {
  query: string;
  setQuery: (text: string) => void;
  style?: ViewStyle;
}

export function CustomeSearchBar({
  query,
  setQuery,
  style,
}: CustomeSearchBarProps) {
  return (
    <InputWithIcon
      icon={"search"}
      placeholder="SEARCH"
      value={query}
      onChangeText={setQuery}
      borderColor="black"
      borderWidth={1}
      style={[styles.container, style]}
      color={"grey"}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
});
