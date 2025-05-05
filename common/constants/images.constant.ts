import { ImageSourcePropType } from "react-native";

const images: Record<string, ImageSourcePropType> = {
  person: require("@/assets/images/person-1.png"),
  person_2: require("@/assets/images/person-2.png"),
  person_3: require("@/assets/images/person-3.png"),
  person_not_found: require("@/assets/images/person-not-found.png"),
  bg: require("@/assets/images/bg-1.png"),
  bg_2: require("@/assets/images/bg-2.png"),
  bg_3: require("@/assets/images/bg-3.png"),
  bg_4: require("@/assets/images/bg-4.png"),
  logo: require("@/assets/images/icon.png"),
};

export { images };
