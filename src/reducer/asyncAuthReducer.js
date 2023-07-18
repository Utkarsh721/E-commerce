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
<<<<<<< HEAD
);
=======
);
>>>>>>> ea3310c91ac833e1dca48bcd0d2a3bfcd4cde5f5
