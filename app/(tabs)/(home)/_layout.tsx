import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="fisherman" options={{ headerShown: false }} />
      <Stack.Screen name="fisherer" options={{ headerShown: false }} />
      <Stack.Screen name="buyer" options={{ headerShown: false }} />
    </Stack>
  );
}
