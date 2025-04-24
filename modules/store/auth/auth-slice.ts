import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DataStatus } from "@/common/enums/enums";
import { type ValueOf } from "@/common/types/types";
import { type UserProfile } from "./types/types";
import { signInAction } from "./auth-actions";

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
  },
});

export { reducer as authReducer, actions as authActions, name as authName };
