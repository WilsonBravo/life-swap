import { TextInput, TextInputProps } from "../react-native/react-native";

type Properties = TextInputProps & {
  className: string;
};

const CustomTextInput: React.FC<Properties> = ({
  className = "",
  ...props
}) => {
  return <TextInput {...props} className={`font-u-regular ${className}`} />;
};

export { CustomTextInput };
