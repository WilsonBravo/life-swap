import React from "react";

import { TouchableOpacity, View } from "../react-native/react-native";
import { Icon } from "../icon/icon";
import { type IconName } from "@/common/types/types";

type Properties = {
  leftIcon: IconName;
  onPressLeftIcon?: () => void;
  rightIcon: IconName;
  onPressRightIcon?: () => void;
  className?: string;
};

const Header: React.FC<Properties> = ({
  leftIcon,
  onPressLeftIcon,
  rightIcon,
  onPressRightIcon,
  className = "",
}) => {
  return (
    <View
      className={`flex-1 w-full flex-row items-center justify-between p-6 ${className}`}
    >
      <TouchableOpacity onPress={onPressLeftIcon} className="p-2">
        <Icon name={leftIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name={rightIcon} onPress={onPressRightIcon} className="p-2" />
      </TouchableOpacity>
    </View>
  );
};

export { Header };
