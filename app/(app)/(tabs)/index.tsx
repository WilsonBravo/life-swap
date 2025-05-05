import { useState } from "react";
import { useRouter } from "expo-router";

import {
  Text,
  TouchableOpacity,
  View,
  Button,
  Image,
  Icon,
  Animated,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  Pressable,
  ScrollView,
} from "@/common/components/components";

import { images } from "@/common/constants/constants";

import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { RootState } from "@/common/types/root-state.type";
import { signOutAction } from "@/modules/store/auth/auth-actions";

const Index = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state: RootState) => state.auth.userData);

  const router = useRouter();

  const [open, setOpen] = useState(false);
  const height = useSharedValue(0);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
    height.value = withTiming(open ? 0 : 40, {
      duration: 200,
    });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    overflow: "hidden",
  }));

  const signOut = async () => {
    await dispatch(signOutAction());
  };

  const resetScreen = () => {
    setOpen(false);
    height.value = withTiming(0, {
      duration: 200,
    });
  };

  return (
    <ScrollView
      className="flex-1 bg-background relative"
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Pressable
        className="flex-1 w-full items-center justify-center pb-32"
        onPress={resetScreen}
      >
        <Animated.View
          style={animatedStyle}
          className="absolute bg-secondary-100 rounded shadow mt-2 top-0 left-0 z-10 w-[200px]"
        >
          <TouchableOpacity
            onPress={signOut}
            className="flex-1 items-center justify-center"
          >
            <Text variant="h4">Sign Out</Text>
          </TouchableOpacity>
        </Animated.View>

        <View className="w-full flex-row justify-between items-center py-4 px-8">
          <TouchableOpacity onPress={toggleDropdown}>
            <Icon name="bars" size={25} className="color-secondary-800 p-4" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search" size={25} className="color-secondary-800 p-4" />
          </TouchableOpacity>
        </View>
        <View className="flex-col w-full items-center p-10 gap-2">
          <Text variant="h1" fontStyle="bold">
            Routines
          </Text>
          <Image
            source={images.person_2}
            className="h-[350px]"
            resizeMode="contain"
          />
          <View className="w-full flex-col items-center gap-4">
            <View className="flex-row items-center">
              <Text variant="h2">Welcome </Text>
              <Text variant="h2" className="color-secondary-400">
                {userData?.username}!
              </Text>
            </View>
            <Text variant="h4">
              Start building your routine by adding your favorite activities
            </Text>
            <Button
              label="Get Started"
              className="w-full"
              onPress={() => router.push("/routines/create-routine")}
            />
          </View>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default Index;
