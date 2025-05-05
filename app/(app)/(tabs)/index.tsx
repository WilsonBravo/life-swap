import { useRouter } from "expo-router";

import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
} from "@/common/components/components";

import { images } from "@/common/constants/constants";

import { useAppSelector } from "@/common/hooks/hooks";
import { RootState } from "@/common/types/root-state.type";

const Index = () => {
  const userData = useAppSelector((state: RootState) => state.auth.userData);

  const router = useRouter();

  return (
    <ScrollView
      className="flex-1 bg-background relative"
      contentContainerStyle={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View className="flex-1 w-full items-center justify-center pb-32 pt-20">
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
      </View>
    </ScrollView>
  );
};

export default Index;
