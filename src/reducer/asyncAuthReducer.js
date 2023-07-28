import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../Component/Services/apiAuthServices";

export const userSignupAction = createAsyncThunk(
  "userSignupAction",
  async (credential) => {
    console.log(2, credential);
    const response = await apiAuthService.signUp(credential);
    console.log(5, response);
    return response;
  }
);
export const userLoginAction = createAsyncThunk(
  "userLoginAction",
  async (credential, thunk) => {
    console.log(2, credential);
    const response = await apiAuthService.login(credential);
    setTimeout(() => {
      thunk.dispatch(getUserDataAction());
    }, 1000);
    console.log(5, response);
    return response;
  }
);
export const getUserProfileAction = createAsyncThunk(
  "getUserProfileAction",
  async () => {
    const response = await apiAuthService.getUserProfile();
    return response.users[0];
  }
);

export const updateProfileAction = createAsyncThunk(
  "updateProfileAction",
  async (credentials) => {
    // console.log("2.signup data in async reducer", credentials);
    const response = await apiAuthService.updateProfile(credentials);
    // console.log("5.data after recieving response in async", response);
    return response;
  }
);

export const userForgetpasswordAction = createAsyncThunk(
  "userForgetPasswordAction",
  async (email) => {
    console.log(2, email);
    const response = await apiAuthService.forgetPassword(email);
    console.log(5, response);
    return response;
  }
);
export const getUserDataAction = createAsyncThunk(
  "getUserDataAction",
  async () => {
    console.log(2);
    const response = await apiAuthService.getUserData();
    console.log(5, response);
    return response;
  }

);