import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Provider as StoreProvider } from "react-redux";
import Toast from "react-native-toast-message";

import "./global.css";
import { store } from "@/modules/store/store";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Baloo2-Regular": require("../assets/fonts/Baloo_2/static/Baloo2-Regular.ttf"),
    "Baloo2-Bold": require("../assets/fonts/Baloo_2/static/Baloo2-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <>
      <StoreProvider store={store}>
        <StatusBar hidden />
        <Slot />
        <Toast />
      </StoreProvider>
    </>
  );
}
