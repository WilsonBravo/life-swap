import React from "react";
import { useRouter } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  FormInput,
} from "@/common/components/components";
import { images } from "@/common/constants/constants";
import {
  signUpValidationSchema,
  SignUpFormData,
} from "@/common/validations/validations";
import Toast from "react-native-toast-message";

const SignUp = () => {
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const onSubmit = (formData: SignUpFormData) => {
    Toast.show({
      type: "success",
      text1: "You signed up successfully",
    });
  };

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
              onPress={() => router.replace("/sign-in")}
            >
              <Text className="text-xl color-white text-right">Sign In</Text>
            </TouchableOpacity>
            <Text className="text-6xl font-bold color-secondary-800">
              LifeSwap
            </Text>
            <Text className="text-4xl font-bold">Create Account</Text>
            <View className="flex-row items-center w-full pb-20">
              <View className="gap-4 w-full px-[40px]">
                <FormInput
                  control={control}
                  name="name"
                  placeholder="Username"
                  iconName="user"
                  errorMessage={errors.name?.message ?? null}
                />

                <FormInput
                  control={control}
                  name="email"
                  placeholder="Email"
                  iconName="envelope"
                  errorMessage={errors.email?.message ?? null}
                />

                <FormInput
                  control={control}
                  name="password"
                  placeholder="Password"
                  iconName="lock"
                  errorMessage={errors.password?.message ?? null}
                  password
                />

                <FormInput
                  control={control}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  iconName="lock"
                  errorMessage={errors.confirmPassword?.message ?? null}
                  password
                />

                <TouchableOpacity
                  onPress={handleSubmit(onSubmit)}
                  className="bg-primary-400 rounded-full px-5 py-3 w-[150px] items-center"
                >
                  <Text className="text-xl color-white">Sign Up</Text>
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

export default SignUp;
