import { Stack } from "expo-router";

export default function ResponsesLayout() {
  return (
    <Stack>
      {/* <Stack.Screen name="(failure)" options={{ headerShown: false }} /> */}
      <Stack.Screen name="(success)" options={{ headerShown: false }} />
    </Stack>
  );
}
