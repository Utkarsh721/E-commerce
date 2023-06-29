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
  async (credential) => {
    console.log(2, credential);
    const response = await apiAuthService.login(credential);
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