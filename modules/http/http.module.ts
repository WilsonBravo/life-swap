import { StorageKey } from "@/common/enums/enums";
import { secureStorageApi } from "../storage/storage";
import { ContentType, HttpHeader } from "./enums/enums";
import { HttpMethod } from "./types/types";
import { ServerValidationErrorResponse, ValueOf } from "@/common/types/types";

type HttpOptions = {
  method: HttpMethod;
  hasAuth?: boolean;
  contentType: ValueOf<typeof ContentType>;
  payload: BodyInit | null;
};

class Http {
  public static load<T = unknown>(
    url: string,
    options: Partial<HttpOptions> = {}
  ): Promise<T> {
    const {
      method = "GET",
      hasAuth = false,
      payload = null,
      contentType,
    } = options;

    const headers = Http.getHeaders(contentType, hasAuth);

    return fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(Http.checkStatus)
      .then((res) => Http.parseJSON<T>(res))
      .catch(Http.throwError);
  }

  public static loadNoContent(
    url: string,
    options: Partial<HttpOptions> = {}
  ): Promise<void> {
    const {
      method = "GET",
      hasAuth = false,
      payload = null,
      contentType,
    } = options;

    const headers = Http.getHeaders(contentType, hasAuth);

    return fetch(url, {
      method,
      headers,
      body: payload,
    })
      .then(Http.checkStatus)
      .then(() => {
        return Promise.resolve();
      })
      .catch(Http.throwError);
  }

  private static getHeaders(
    contentType?: ValueOf<typeof ContentType>,
    hasAuth?: boolean
  ): Headers {
    const headers = new Headers();

    if (contentType) {
      headers.append(HttpHeader.CONTENT_TYPE, contentType);
    }

    if (hasAuth) {
      const token = secureStorageApi.get(StorageKey.ACCESS_TOKEN);
      headers.append(HttpHeader.AUTHORIZATION, `Bearer ${token}`);
    }

    return headers;
  }

  private static async checkStatus(response: Response): Promise<Response> {
    if (!response.ok) {
      const { error, message }: ServerValidationErrorResponse =
        await response.json();
      if (error && message) {
        throw new Error(message);
      } else if (message === "Internal server error") {
        throw new Error(message);
      }
    }
    return response;
  }

  private static parseJSON<T>(response: Response): Promise<T> {
    return response.json();
  }

  private static throwError(err: Error): never {
    throw err;
  }
}

export { Http };
