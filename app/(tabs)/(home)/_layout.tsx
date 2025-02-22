import { Stack } from "expo-router";

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="fisherman" options={{ headerShown: false }} />
      <Stack.Screen name="fisherer" options={{ headerShown: false }} />
      <Stack.Screen name="fisheries" options={{ headerShown: false }} />
      <Stack.Screen name="products/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
