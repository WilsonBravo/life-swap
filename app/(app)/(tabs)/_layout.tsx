import React from "react";
import { useAppSelector } from "@/common/hooks/hooks";
import { Redirect, Tabs } from "expo-router";
import { View, TabBar, Loading } from "@/common/components/components";

const TabsLayout = () => {
  const { userData, status } = useAppSelector((state) => state.auth);

  if (status === "pending") {
    return (
      <View className="flex-1 bg-background items-center justify-center">
        <Loading />
      </View>
    );
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
            { iconName: "calendar", route: "/(app)/(tabs)/routines" },
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
        <Tabs.Screen name="routines" />
      </Tabs>
    </>
  );
};

export default TabsLayout;
