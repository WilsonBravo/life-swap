import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  View,
  Text,
  Pressable,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  FormInput,
  Button,
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
  const { status, userData } = useAppSelector((state: RootState) => state.auth);
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

  useEffect(() => {
    if (userData) router.replace("/(app)/(tabs)");
  }, [userData]);

  return (
    <View className="relative flex-1 bg-background">
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{
          flex: 1,
          zIndex: 3,
        }}
      >
        <Pressable onPress={Keyboard.dismiss} className="flex-1">
          <View className="flex-1 items-center justify-center gap-4">
            <Button
              onPress={() => router.replace("/sign-in")}
              label="Log In"
              className="ml-auto max-w-[100px] rounded-none rounded-l-full"
            />
            <Text variant="h1" fontStyle="bold">
              LifeSwap
            </Text>
            <Text variant="h2">Create Account</Text>
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

                <Button
                  onPress={handleSubmit(onSubmit)}
                  label="Sign Up"
                  disabled={status === DataStatus.PENDING}
                />
              </View>
            </View>
          </View>
        </Pressable>
      </KeyboardAvoidingView>
      <Image
        source={images.person_3}
        style={{ zIndex: 2 }}
        className="h-[400px] absolute left-10 bottom-20"
        resizeMode="contain"
      />
      <Image
        source={images.bg_3}
        style={{ zIndex: 1 }}
        className="absolute w-[500px] -bottom-32"
        resizeMode="contain"
      />
    </View>
  );
};

export default SignUp;
