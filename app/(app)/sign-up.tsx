import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import person from "@/assets/images/person-1.png";
import bg from "@/assets/images/bg-1.png";

const SignUp = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-background gap-4 relative h-full">
      <Text className="text-8xl font-bold color-secondary-800">LifeSwap</Text>
      <Text className="text-6xl font-bold">Create Account</Text>
      <View className="flex-row items-center relative w-full pb-20">
        <View className="gap-4 w-full px-[40px] z-20">
          <View className="flex-row gap-2 items-center bg-white px-5 rounded-xl w-[230px]">
            <FontAwesome name="user" size={20} color="#54D2B3" />
            <TextInput
              placeholder="Name"
              className="text-2xl placeholder:text-secondary-500"
            />
          </View>
          <View className="flex-row gap-2 items-center bg-white px-5 rounded-xl w-[230px]">
            <FontAwesome name="envelope" size={20} color="#54D2B3" />
            <TextInput
              placeholder="Email"
              className="text-2xl placeholder:text-secondary-500"
            />
          </View>
          <View className="flex-row gap-2 items-center bg-white px-5 rounded-xl w-[230px]">
            <FontAwesome name="lock" size={20} color="#54D2B3" />
            <TextInput
              placeholder="Password"
              className="text-2xl placeholder:text-secondary-500"
            />
          </View>
          <View className="flex-row gap-2 items-center bg-white px-5 rounded-xl w-[230px]">
            <FontAwesome name="lock" size={20} color="#54D2B3" />
            <TextInput
              placeholder="Confirm Password"
              className="text-2xl placeholder:text-secondary-500"
            />
          </View>
          <TouchableOpacity
            onPress={() => {}}
            className="bg-primary-400 rounded-full px-5 py-3 w-[150px] items-center"
          >
            <Text className="text-2xl color-white">SignUp</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={person}
          className="h-[400px] absolute left-40 -bottom-10 z-10"
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={() => {}} className="">
        <Text className="color-blue-600 underline text-xl">Sign In</Text>
      </TouchableOpacity>
      <Image
        source={bg}
        className="absolute w-full -bottom-28 z-0"
        resizeMode="contain"
      />
    </View>
  );
};

export default SignUp;
