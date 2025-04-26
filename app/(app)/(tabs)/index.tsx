import { Text, TouchableOpacity, View } from "@/common/components/components";

import { useAppDispatch, useAppSelector } from "@/common/hooks/hooks";
import { RootState } from "@/common/types/root-state.type";
import { signOutAction } from "@/modules/store/auth/auth-actions";

const Index = () => {
  const dispatch = useAppDispatch();
  const userData = useAppSelector((state: RootState) => state.auth.userData);
  const signOut = async () => {
    await dispatch(signOutAction());
  };

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="font-heading text-primary-500 text-2xl">
        ¡Hola {userData?.username}!
      </Text>
      <Text>¡Hola Mundo!</Text>
      <TouchableOpacity onPress={signOut}>
        <Text className="text-blue-600 underline text-xl">Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;
