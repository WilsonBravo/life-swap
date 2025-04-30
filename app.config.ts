import "dotenv/config";
import type { ExpoConfig } from "@expo/config";

export default ({ config }: { config: ExpoConfig }) => ({
  ...config,
  extra: {
    API_URL: process.env.API_URL,
    ENV: process.env.NODE_ENV,
  },
});
