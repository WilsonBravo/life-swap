import React from "react";
import { Tabs } from "expo-router";

const AuthLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="sign-in" />
      <Tabs.Screen name="sign-up" />
    </Tabs>
  );
};

export default AuthLayout;
