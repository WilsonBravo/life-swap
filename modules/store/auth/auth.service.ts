import { ApiPath } from "@/common/enums/enums";
import { UserProfile, UserSignIn, UserSignUp } from "./types/types";

type Constructor = {
  baseUrl: string;
};

class AuthService {
  private baseUrl: string;

  private basePath: string;

  constructor({ baseUrl }: Constructor) {
    this.baseUrl = baseUrl;
    this.basePath = ApiPath.AUTH;
  }

  public signIn({ email, password }: UserSignIn): UserProfile {
    return {
      username: "johndoe",
      email,
    };
  }

  public signUp({
    username,
    email,
    password,
    confirmPassword,
  }: UserSignUp): UserProfile {
    return {
      username: "johndoe",
      email,
    };
  }

  public signOut(): void {
    return;
  }

  public verifyToken(): void {
    return;
  }

  private getUrl(path = ""): string {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
}

export default AuthService;
