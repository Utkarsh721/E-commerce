import { createSlice } from "@reduxjs/toolkit";
import {
  userSignupAction,
  userLoginAction,
  getUserDataAction,
} from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "user",
  initialState: {
    userSignUpData: undefined,
    userLoginData: undefined,
    userProfileData: undefined,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(userSignupAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userSignUpData = action.payload;
    });
    builder.addCase(userLoginAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userLoginData = action.payload;
      const idToken = action.payload.idToken;
      localStorage.setItem("idToken", idToken);
    });
    builder.addCase(getUserDataAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userProfileData = action.payload;
    });
  },
});
export default authSlice;

export const authSliceActions = authSlice.actions;


