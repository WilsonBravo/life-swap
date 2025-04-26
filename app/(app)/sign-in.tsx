import React, { useState } from "react";
import { useRouter } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  Icon,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from "@/common/components/components";
import { images } from "@/common/constants/constants";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <View className="relative flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          zIndex: 3,
        }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1 items-center justify-center gap-4">
            <TouchableOpacity
              className="ml-auto bg-primary-400 rounded-l-full px-5 py-3 w-[100px]"
              onPress={() => router.replace("/sign-up")}
            >
              <Text className="text-2xl color-white text-right">Sign Up</Text>
            </TouchableOpacity>
            <Text className="text-8xl font-bold color-secondary-800">
              LifeSwap
            </Text>
            <Text className="text-6xl font-bold p-4 text-center">Welcome back! Log in</Text>
            <View className="flex-row items-center w-full pb-20">
              <View className="gap-4 w-full px-[40px]">
                <View className="flex-row gap-2 items-center bg-white px-5 rounded-xl w-[230px]">
                  <Icon
                    name="envelope"
                    size={20}
                    className="color-secondary-500"
                  />
                  <TextInput
                    placeholder="Email"
                    className="flex-1 text-2xl placeholder:text-secondary-500"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                  />
                </View>
                <View className="flex-row gap-2 items-center bg-white px-5 rounded-xl w-[230px]">
                  <Icon name="lock" size={20} className="color-secondary-500" />
                  <TextInput
                    placeholder="Password"
                    className="flex-1 text-2xl placeholder:text-secondary-500"
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Icon
                      name={showPassword ? "eye" : "eye-slash"}
                      className="color-secondary-500"
                      size={16}
                    />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  onPress={() => {}}
                  className="bg-primary-400 rounded-full px-5 py-3 w-[150px] items-center"
                >
                  <Text className="text-2xl color-white">Sign In</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Image
        source={images.person}
        style={{ zIndex: 2 }}
        className="h-[400px] absolute left-40 bottom-14"
        resizeMode="contain"
      />
      <Image
        source={images.bg}
        style={{ zIndex: 1 }}
        className="absolute w-full -bottom-28"
        resizeMode="contain"
      />
    </View>
  );
};

export default SignIn;
