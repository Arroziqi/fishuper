import {ThemedView} from "@/components/ThemedView";
import {Link} from "expo-router";
import {StyleSheet} from "react-native";

export default function HomeScreen() {
  return (
    <ThemedView className="flex items-center justify-center h-screen"><Link href="/landing">Go to Landing Page</Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
