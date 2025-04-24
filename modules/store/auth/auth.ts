import AuthService from "./auth.service";
import { authReducer } from "./auth-slice";

// TODO baseUrl: Conf.API_PATH,

const authService = new AuthService({
  baseUrl: "myBaseUrl.com",
});

export { authService, AuthService, authReducer };
