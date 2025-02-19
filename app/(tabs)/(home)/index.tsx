import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface HomeScreenProps {
  role?: string;
}

export default function HomeScreen({ role = "buyer" }: HomeScreenProps) {
  const [selectedRole, setSelectedRole] = useState<string>(role);

  const getHomeScreen = (role: string) => {
    switch (role) {
      case "fisherman":
        return router.push("/(tabs)/(home)/fisherman");
      case "fisherer":
        return router.push("/(tabs)/(home)/fisherer");
      case "buyer":
        return router.push("/(tabs)/(home)/fisheries");
      default:
        return router.push("/landing");
    }
  };

  return (
    <ThemedView className="flex items-center justify-center h-screen">
      <TouchableOpacity onPress={() => getHomeScreen("fisherman")}>
        <Text>Go to Fisherman</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getHomeScreen("fisherer")}>
        <Text>Go to fisherer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getHomeScreen("buyer")}>
        <Text>Go to buyer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => getHomeScreen("")}>
        <Text>Go to Landing page</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({});
