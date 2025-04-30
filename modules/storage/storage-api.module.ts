import * as SecureStore from "expo-secure-store";
import { StorageKey } from "@/common/enums/enums";
import { ValueOf } from "@/common/types/types";

class SecureStorage {

  public async clear(): Promise<void> {
    const keys: ValueOf<typeof StorageKey>[] = Object.values(StorageKey);
    await Promise.all(
      keys.map((key) => SecureStore.deleteItemAsync(key as string))
    );
  }

  public async drop(key: ValueOf<typeof StorageKey>): Promise<void> {
    await SecureStore.deleteItemAsync(key as string);
  }

  public async get<R = string>(
    key: ValueOf<typeof StorageKey>
  ): Promise<R | null> {
    const value = await SecureStore.getItemAsync(key as string);
    return value as R | null;
  }

  public async has(key: ValueOf<typeof StorageKey>): Promise<boolean> {
    const value = await this.get(key);
    return Boolean(value);
  }

  public async set(
    key: ValueOf<typeof StorageKey>,
    value: string
  ): Promise<void> {
    await SecureStore.setItemAsync(key as string, value);
  }
}

export { SecureStorage };
