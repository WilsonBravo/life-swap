import { Stack } from "expo-router";

export default function RoutinesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="create-routine" options={{ headerShown: false }} />
    </Stack>
  );
}
