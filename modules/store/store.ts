import { configureStore } from "@reduxjs/toolkit";

import { rootReducer } from "./root-reducer";
import { authService } from "./auth/auth";
import { errorMiddleware } from "@/common/middlewares/middlewares";

const extraArgument = {
  authService,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
    }).concat(errorMiddleware),
});

export { store, extraArgument };
