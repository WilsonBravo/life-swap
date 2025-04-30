import { useEffect } from "react";
import { Stack } from "expo-router";

import { useAppDispatch } from "@/common/hooks/hooks";
import { verifyTokenAction } from "@/modules/store/auth/auth-actions";

export default function AppLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(verifyTokenAction());
  }, []);

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          presentation: "modal",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
