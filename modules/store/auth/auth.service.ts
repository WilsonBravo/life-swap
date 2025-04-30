import { ApiPath, StorageKey } from "@/common/enums/enums";
import { UserProfile } from "@/common/types/types";
import { Http } from "@/modules/http/http";
import { ContentType, HttpMethod } from "@/modules/http/enums/enums";

import { UserSignIn, UserSignUp } from "./types/types";
import { SecureStorage } from "@/modules/storage/storage";

type Constructor = {
  baseUrl: string;
  storage: SecureStorage;
};

class AuthService {
  private baseUrl: string;

  private basePath: string;
  private storage: SecureStorage;

  constructor({ baseUrl, storage }: Constructor) {
    this.baseUrl = baseUrl;
    this.basePath = ApiPath.AUTH;
    this.storage = storage;
  }

  public async signIn(payload: UserSignIn): Promise<UserProfile> {
    const response = await Http.load(this.getUrl("/sign-in"), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });

    const { accessToken, ...userData } = response as UserProfile & {
      accessToken: string;
    };

    this.storage.set(StorageKey.ACCESS_TOKEN, accessToken);

    return userData;
  }

  public async signUp(payload: UserSignUp): Promise<UserProfile> {
    const response = await Http.load(this.getUrl("/sign-up"), {
      method: HttpMethod.POST,
      contentType: ContentType.JSON,
      payload: JSON.stringify(payload),
    });

    const { accessToken, ...userData } = response as UserProfile & {
      accessToken: string;
    };

    this.storage.set(StorageKey.ACCESS_TOKEN, accessToken);

    return userData;
  }

  public signOut(): void {
    this.storage.drop(StorageKey.ACCESS_TOKEN);
    return;
  }

  public async verifyToken(): Promise<UserProfile> {
    if (await this.storage.has(StorageKey.ACCESS_TOKEN)) {
      const response: UserProfile = await Http.load(
        this.getUrl("/verify-token"),
        {
          method: HttpMethod.GET,
          hasAuth: true,
        }
      );

      return response;
    }
    throw new Error("Unauthorized user");
  }

  private getUrl(path = ""): string {
    return `${this.baseUrl}${this.basePath}${path}`;
  }
}

export default AuthService;
