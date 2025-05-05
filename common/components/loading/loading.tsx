import React, { useEffect } from "react";

import {
  Animated,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  withRepeat,
} from "@/common/components/react-native-reanimated/react-native-reanimated";
import { Image } from "@/common/components/react-native/react-native";
import { images } from "@/common/constants/images.constant";

const Loading: React.FC = () => {
  const rotation = useSharedValue(0);

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 2000, easing: Easing.elastic(1) }),
      -1,
      false
    );
  };

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          rotate: `${rotation.value}deg`,
        },
      ],
    }),
    []
  );

  return (
    <Animated.View style={animatedStyle}>
      <Image
        source={images.logo} // ajusta tu ruta
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export { Loading };
