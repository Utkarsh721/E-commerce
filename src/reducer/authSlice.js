import { createSlice } from "@reduxjs/toolkit";
import { userSignupAction, userLoginAction } from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "user",
  initialState: {
    userSignUpData: undefined, 
    userLoginData: undefined,  
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
    })

  },
});
export default authSlice;