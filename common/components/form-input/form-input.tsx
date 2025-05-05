import { useState } from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { View, Text, TouchableOpacity } from "../react-native/react-native";
import { CustomTextInput as TextInput } from "../custom-text-input/custom-text-input";
import { Icon } from "../icon/icon";
import { type IconName } from "@/common/types/types";

type Properties<T extends FieldValues> = {
  name: Path<T>;
  placeholder: string;
  control: Control<T>;
  iconName: IconName;
  errorMessage?: string | null;
  password?: boolean;
};

const FormInput = <T extends FieldValues>({
  name,
  placeholder,
  control,
  iconName,
  errorMessage,
  password = false,
}: Properties<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <View>
          <View className="flex-row gap-2 items-center bg-secondary-100 px-5 py-4 rounded-xl w-[230px]">
            <Icon name={iconName} className="color-secondary-500" />
            <TextInput
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              className="flex-1 placeholder:text-secondary-500"
              secureTextEntry={password && !showPassword}
            />
            {password && (
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  name={showPassword ? "eye" : "eye-slash"}
                  className="color-secondary-500"
                  size={16}
                />
              </TouchableOpacity>
            )}
          </View>
          {errorMessage && (
            <Text className="text-red-500 text-sm">{errorMessage}</Text>
          )}
        </View>
      )}
      name={name}
    />
  );
};

export { FormInput };
