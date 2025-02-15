import { Stack } from "expo-router";

export default function SuccessLayout() {
  return (
    <Stack>
      <Stack.Screen name="orderRecorded" options={{ headerShown: false }} />
      <Stack.Screen
        name="submissionAccepted"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="submissionSuccessful"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="successfullyRegistered"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
