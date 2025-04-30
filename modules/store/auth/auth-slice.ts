import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "@/common/enums/enums";
import { type ValueOf } from "@/common/types/types";
import { type UserProfile } from "./types/types";
import {
  signInAction,
  signUpAction,
  signOutAction,
  verifyTokenAction,
} from "./auth-actions";

type State = {
  userData: UserProfile | null;
  status: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  userData: null,
  status: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<ValueOf<typeof DataStatus>>) => {
      return { ...state, status: action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInAction.pending, (state) => {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    });
    builder.addCase(signInAction.fulfilled, (state, action) => {
      return {
        ...state,
        userData: action.payload,
        status: DataStatus.SUCCESS,
      };
    });
    builder.addCase(signInAction.rejected, (state) => {
      return {
        ...state,
        status: DataStatus.ERROR,
      };
    });

    builder.addCase(signUpAction.pending, (state) => {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    });
    builder.addCase(signUpAction.fulfilled, (state, action) => {
      return {
        ...state,
        userData: action.payload,
        status: DataStatus.SUCCESS,
      };
    });
    builder.addCase(signUpAction.rejected, (state) => {
      return {
        ...state,
        status: DataStatus.ERROR,
      };
    });

    builder.addCase(signOutAction.pending, (state) => {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    });
    builder.addCase(signOutAction.fulfilled, (state) => {
      return {
        ...state,
        userData: null,
        status: DataStatus.SUCCESS,
      };
    });
    builder.addCase(signOutAction.rejected, (state) => {
      return {
        ...state,
        status: DataStatus.ERROR,
      };
    });

    builder.addCase(verifyTokenAction.pending, (state) => {
      return {
        ...state,
        status: DataStatus.PENDING,
      };
    });
    builder.addCase(verifyTokenAction.fulfilled, (state, action) => {
      return {
        ...state,
        userData: action.payload,
        status: DataStatus.SUCCESS,
      };
    });
    builder.addCase(verifyTokenAction.rejected, (state) => {
      return {
        ...state,
        status: DataStatus.ERROR,
      };
    });
  },
});

export { reducer as authReducer, actions as authActions, name as authName };
