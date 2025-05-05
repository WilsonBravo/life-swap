import { useRouter, Router } from "expo-router";

import { View, TouchableOpacity } from "../react-native/react-native";
import { Icon } from "../icon/icon";
import { type IconName } from "@/common/types/types";

type Properties = {
  routes: {
    iconName: IconName;
    route: Parameters<Router["replace"]>[0];
  }[];
};

const TabBar: React.FC<Properties> = ({ routes }) => {
  const router = useRouter();
  return (
    <View className="flex-1 flex-row justify-around w-full px-2 bg-secondary-300 p-4 rounded-full">
      {routes.map(({ route, iconName }, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => router.replace(route)}
            className="flex-1 items-center"
          >
            <Icon name={iconName} size={30} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export { TabBar };
