import {
  TouchableOpacity,
  TouchableOpacityProps,
} from "../react-native/react-native";
import { CustomText as Text } from "../custom-text/custom-text";

type Properties = TouchableOpacityProps & {
  label: string;
  className?: string;
  disabled?: boolean;
};

const Button: React.FC<Properties> = ({
  label,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <TouchableOpacity
      {...props}
      className={`${
        disabled ? "bg-primary-200" : "bg-primary-400"
      } rounded-full px-5 py-3 w-[150px] items-center ${className}`}
      disabled={disabled}
    >
      <Text className="text-xl color-white">{label}</Text>
    </TouchableOpacity>
  );
};

export { Button };
