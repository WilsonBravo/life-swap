import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
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
import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { signUpAction } from "@/modules/store/auth/auth-actions";
import { DataStatus } from "@/common/enums/enums";
import { RootState } from "@/common/types/types";

const SignUp = () => {
  const router = useRouter();
  const status = useAppSelector((state: RootState) => state.auth.status);
  const dispatch = useAppDispatch();

  const [submitForm, setSubmitForm] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpValidationSchema),
  });

  const onSubmit = async (formData: SignUpFormData) => {
    await dispatch(signUpAction(formData));
    setSubmitForm(true);
  };

  useEffect(() => {
    if (submitForm && status === DataStatus.SUCCESS) {
      router.replace("/(app)/(tabs)");
    }
  }, [status, submitForm]);

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
              <Text className="text-xl color-white text-right">Log In</Text>
            </TouchableOpacity>
            <Text className="text-6xl color-secondary-800">LifeSwap</Text>
            <Text className="text-4xl">Create Account</Text>
            <View className="flex-row items-center w-full pb-20">
              <View className="gap-4 w-full px-[40px]">
                <FormInput
                  control={control}
                  name="username"
                  placeholder="Username"
                  iconName="user"
                  errorMessage={errors.username?.message ?? null}
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
                  className={`${
                    status === DataStatus.PENDING
                      ? "bg-primary-200"
                      : "bg-primary-400"
                  } rounded-full px-5 py-3 w-[150px] items-center`}
                  disabled={status === DataStatus.PENDING}
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
