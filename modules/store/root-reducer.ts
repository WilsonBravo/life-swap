import { combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./auth/auth";

const rootReducer = combineReducers({
  auth: authReducer,
});

export { rootReducer };
