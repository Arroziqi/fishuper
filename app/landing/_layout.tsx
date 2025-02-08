import { Stack } from "expo-router";

export default function LandingLayout() {
  return (
    <Stack>
      <Stack.Screen name="about/index" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
