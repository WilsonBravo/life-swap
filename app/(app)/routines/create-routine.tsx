import React from "react";
import { useRouter } from "expo-router";

import {
  View,
  Text,
  TouchableOpacity,
  Icon,
} from "@/common/components/components";

const CreateRoutine: React.FC = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-background relative">
      <View className="absolute top-0 left-0">
        <TouchableOpacity onPress={() => router.back()}>
          <Icon
            name="arrow-left"
            className="color-secondary-800 p-5"
            size={30}
          />
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center justify-center">
        <Text variant="h1">Create Routine</Text>
        <Text variant="h6">This is the create routine screen.</Text>
      </View>
    </View>
  );
};

export default CreateRoutine;
