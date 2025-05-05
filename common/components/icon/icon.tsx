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
  className?: string;
};

const Icon: React.FC<Properties> = ({
  size = 30,
  className = "",
  ...props
}) => {
  return (
    <FontAwesome
      size={size}
      {...props}
      className={`text-secondary-800 ${className}`}
    />
  );
};

export { Icon, FontAwesome };
