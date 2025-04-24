import React from "react";
import { useAppSelector } from "@/common/hooks/hooks";
import { Redirect, Tabs } from "expo-router";
import { Text } from "react-native";

const TabsLayout = () => {
  const { userData, status } = useAppSelector((state) => state.auth);

  if (status === "pending") {
    return <Text>Loading...</Text>;
  }

  if (!userData) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Tabs>
      <Tabs.Screen name="index" />
      <Tabs.Screen name="create-routine" />
    </Tabs>
  );
};

export default TabsLayout;
