import Constants from "expo-constants";

import { secureStorageApi } from "@/modules/storage/storage";

import AuthService from "./auth.service";
import { authReducer } from "./auth-slice";

const apiUrl = Constants.expoConfig?.extra?.API_URL ?? "";

const authService = new AuthService({
  baseUrl: apiUrl,
  storage: secureStorageApi,
});

export { authService, AuthService, authReducer };
