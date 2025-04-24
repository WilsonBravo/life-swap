import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

import "./global.css";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Baloo2-Regular": require("../assets/fonts/Baloo_2/static/Baloo2-Regular.ttf"),
    "Baloo2-Bold": require("../assets/fonts/Baloo_2/static/Baloo2-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StatusBar hidden />
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="(auth)"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
}
