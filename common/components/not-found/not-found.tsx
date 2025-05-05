import React from "react";

import { View, Image } from "@/common/components/react-native/react-native";
import { CustomText as Text } from "@/common/components/custom-text/custom-text";
import { images } from "@/common/constants/images.constant";

type Properties = {
  title?: string;
  description?: string;
};

const NotFound: React.FC<Properties> = ({
  title = "Not Found",
  description = "We couldn't find what you're looking for.",
}) => {
  return (
    <View className="flex-1 flex-col items-center justify-end gap-4">
      <Text variant="h1" fontStyle="bold">
        {title}
      </Text>
      <Text variant="h3" className="text-center text-secondary-600">{description}</Text>
      <Image
        source={images.person_not_found}
        className="h-[400px] mt-10"
        resizeMode="contain"
      />
    </View>
  );
};

export { NotFound };
