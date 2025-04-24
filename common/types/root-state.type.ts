import { type store } from "@/modules/store/store";

type RootState = ReturnType<typeof store.getState>;

export { RootState };
