import React from "react";
import { useAppSelector } from "@/common/hooks/hooks";
import { Redirect, Tabs } from "expo-router";
import { Text, View, TabBar } from "@/common/components/components";

const TabsLayout = () => {
  const { userData, status } = useAppSelector((state) => state.auth);

  if (status === "pending") {
    return <Text>Loading...</Text>;
  }

  if (!userData) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <>
      <View className="absolute z-10 bottom-16 left-4 w-96">
        <TabBar
          routes={[
            { iconName: "home", route: "/(app)/(tabs)" },
            { iconName: "calendar", route: "/(app)/(tabs)/create-routine" },
          ]}
        />
      </View>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: "none",
          },
        }}
      >
        <Tabs.Screen name="index" />
        <Tabs.Screen name="create-routine" />
      </Tabs>
    </>
  );
};

export default TabsLayout;
