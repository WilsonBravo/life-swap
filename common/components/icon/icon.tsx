import { cssInterop } from "nativewind";
import FontAwesome from "@expo/vector-icons/FontAwesome";

cssInterop(FontAwesome, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true },
  },
});

type Properties = React.ComponentProps<typeof FontAwesome> & {
  size?: number;
};

const Icon: React.FC<Properties> = ({ size = 30, ...props }) => {
  return <FontAwesome size={size} {...props} className="text-secondary-800" />;
};

export { Icon, FontAwesome };
