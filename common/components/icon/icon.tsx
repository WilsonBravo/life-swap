import { cssInterop } from "nativewind";
import FontAwesome from "@expo/vector-icons/FontAwesome";

cssInterop(FontAwesome, {
  className: {
    target: "style",
    nativeStyleToProp: { color: true },
  },
});

export { FontAwesome as Icon };
