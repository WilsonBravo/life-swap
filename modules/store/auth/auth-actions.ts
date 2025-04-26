import { createAsyncThunk } from "@reduxjs/toolkit";

import { AsyncThunkConfig } from "@/common/types/types";
import {
  type UserSignIn,
  type UserProfile,
  type UserSignUp,
} from "./types/types";

const authName = "auth";

const signInAction = createAsyncThunk<
  UserProfile,
  UserSignIn,
  AsyncThunkConfig
>(`${authName}/sign-in`, async (_payload, { extra }) => {
  const { authService } = extra;

  return authService.signIn(_payload);
});

const signUpAction = createAsyncThunk<
  UserProfile,
  UserSignUp,
  AsyncThunkConfig
>(`${authName}/sign-up`, async (_payload, { extra }) => {
  const { authService } = extra;

  return authService.signUp(_payload);
});

// const verifyTokenAction = createAsyncThunk<
//   UserProfileResponseDto,
//   void,
//   AsyncThunkConfig
// >(`${authName}/verify-token`, async (_payload, { extra }) => {
//   const { authService } = extra;

//   return authService.verifyToken();
// });

const signOutAction = createAsyncThunk<void, void, AsyncThunkConfig>(
  `${authName}/sign-out`,
  (_payload, { extra }) => {
    const { authService } = extra;
    authService.signOut();
  }
);

export { signInAction, signUpAction, signOutAction };
