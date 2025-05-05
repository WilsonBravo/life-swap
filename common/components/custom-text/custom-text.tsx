import { Text, TextProps } from "../react-native/react-native";

type Properties = TextProps & {
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  fontStyle?:
    | "regular"
    | "medium-italic"
    | "medium"
    | "light-italic"
    | "light"
    | "italic"
    | "bold-italic"
    | "bold";
  children: React.ReactNode;
  className?: string;
};

const CustomText: React.FC<Properties> = ({
  variant = "h6",
  fontStyle = "regular",
  children,
  className = "",
  ...props
}) => {
  const customVariant = {
    h1: "text-6xl",
    h2: "text-4xl",
    h3: "text-2xl",
    h4: "text-xl",
    h5: "text-lg",
    h6: "text-base",
    p: "text-sm",
  };

  const customFontStyle = {
    regular: "font-u-regular",
    "medium-italic": "font-u-medium-italic",
    medium: "font-u-medium",
    "light-italic": "font-u-light-italic",
    light: "font-u-light",
    italic: "font-u-italic",
    "bold-italic": "font-u-bold-italic",
    bold: "font-u-bold",
  };

  return (
    <Text
      {...props}
      className={`text-secondary-800 ${customVariant[variant]} ${customFontStyle[fontStyle]} ${className}`}
    >
      {children}
    </Text>
  );
};

export { CustomText };
