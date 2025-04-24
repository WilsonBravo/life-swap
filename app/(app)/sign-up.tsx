import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const SignUp = () => {
  const router = useRouter();
  return (
    <View>
      <Text>SignUp</Text>
      <TouchableOpacity onPress={() => router.replace("/sign-in")}>
        <Text className="color-blue-600 underline text-xl">Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
