import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider as StoreProvider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";

import "./global.css";
import { store } from "@/modules/store/store";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
    "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
    "Ubuntu-BoldItalic": require("../assets/fonts/Ubuntu-BoldItalic.ttf"),
    "Ubuntu-Italic": require("../assets/fonts/Ubuntu-Italic.ttf"),
    "Ubuntu-Light": require("../assets/fonts/Ubuntu-Light.ttf"),
    "Ubuntu-LightItalic": require("../assets/fonts/Ubuntu-LightItalic.ttf"),
    "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
    "Ubuntu-MediumItalic": require("../assets/fonts/Ubuntu-MediumItalic.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaProvider>
        <StoreProvider store={store}>
          <StatusBar hidden />
          <Slot />
          <Toast />
        </StoreProvider>
      </SafeAreaProvider>
    </>
  );
}
