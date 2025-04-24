import { ApiPath } from "@/common/enums/enums";

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

  public signIn({ email, password }: { email: string; password: string }): {
    username: string;
    email: string;
  } {
    return {
      username: "johndoe",
      email,
    };
  }

  public signUp(): void {
    return;
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
