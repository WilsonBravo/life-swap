import { Text, TextProps } from "../react-native/react-native";

type Properties = TextProps & {
  children: React.ReactNode;
  className?: string;
};

const CustomText: React.FC<Properties> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <Text {...props} className={`font-u-regular ${className}`}>
      {children}
    </Text>
  );
};

export { CustomText };
