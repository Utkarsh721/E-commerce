import { createSlice } from "@reduxjs/toolkit";
import {
  userSignupAction,
  userLoginAction,
  getUserDataAction,
  getUserProfileAction,
} from "./asyncAuthReducer";

const authSlice = createSlice({
    name: "auth",
    initialState: {
      userProfileData: undefined,
      userLoginData: undefined,     
    },
    reducers: {
      userLogout(state, action) {
        localStorage.removeItem("idToken");
        state.userLoginData = undefined;
        state.userProfileData = undefined;
        
      },
    },
  extraReducers: (builder) => {
    builder.addCase(userSignupAction.fulfilled, (state, action) => {
      const response = action.payload;
      // console.log(6, action.payload);
      state.userSignUpData = response;
      localStorage.setItem("idToken", response.idToken);
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
    builder.addCase(getUserProfileAction.fulfilled, (state, action) => {
      const response = action.payload;
      state.userProfileData = response;
      // console.log(response);
    });
  },
});
export default authSlice;

export const authActions = authSlice.actions;


