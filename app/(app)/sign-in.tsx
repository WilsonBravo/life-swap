import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const SignIn = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity onPress={() => router.replace("/(app)/(tabs)")}>
        <Text className="color-blue-600 underline text-xl">Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.replace("/sign-up")}>
        <Text className="color-blue-600 underline text-xl">Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
