import { StyleSheet } from "react-native";
import { InputWithIcon } from "./input/InputWithIcon";

interface CustomeSearchBarProps {
  query: string;
  setQuery: (text: string) => void;
}

export function CustomeSearchBar({ query, setQuery }: CustomeSearchBarProps) {
  return (
    <InputWithIcon
      icon={"search"}
      placeholder="SEARCH"
      value={query}
      onChangeText={setQuery}
      borderColor="black"
      borderWidth={1}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
});
