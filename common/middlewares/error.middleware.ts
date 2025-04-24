import { type Middleware, isRejected } from "@reduxjs/toolkit";
import Toast from "react-native-toast-message";

import { type ServerValidationErrorResponse } from "@/common/types/types";

const errorMiddleware: Middleware = () => {
  return (next) => (action) => {
    if (isRejected(action) && action.type !== "auth/verify-token/rejected") {
      const { message } = action.error as ServerValidationErrorResponse;
      Toast.show({
        type: "error",
        text1: message,
      });
    }

    return next(action);
  };
};

export { errorMiddleware };
