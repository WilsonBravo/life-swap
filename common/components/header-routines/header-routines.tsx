import { useState } from "react";

import { Header } from "../header/header";
import {
  View,
  Pressable,
  TouchableOpacity,
} from "../react-native/react-native";
import { CustomText as Text } from "../custom-text/custom-text";

import {
  Animated,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "@/common/components/react-native-reanimated/react-native-reanimated";

import { useAppDispatch } from "@/common/hooks/hooks";
import { signOutAction } from "@/modules/store/auth/auth-actions";

type Properties = Omit<
  React.ComponentProps<typeof Header>,
  "leftIcon" | "rightIcon"
>;

const HeaderRoutines: React.FC<Properties> = () => {
  const dispatch = useAppDispatch();

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
    <View className="flex-1 absolute h-full w-full">
      <View className="flex-1 relative h-full w-full">
        <Animated.View
          style={animatedStyle}
          className="absolute bg-secondary-100 rounded shadow mt-2 top-0 left-0 z-30 w-[200px]"
        >
          <TouchableOpacity
            onPress={signOut}
            className="flex-1 items-center justify-center"
          >
            <Text variant="h4">Sign Out</Text>
          </TouchableOpacity>
        </Animated.View>

        <Header
          leftIcon="bars"
          onPressLeftIcon={toggleDropdown}
          rightIcon="search"
          className="absolute top-0 left-0 z-20"
        />
        {open && (
          <Pressable
            className="flex-1 h-full w-full absolute z-10"
            onPress={resetScreen}
          />
        )}
      </View>
    </View>
  );
};

export { HeaderRoutines };
