import { createSlice } from "@reduxjs/toolkit";
import { userSignupAction } from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "user",
  initialState: {
    userSignUpData: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userSignupAction.fulfilled, (state, action) => {
      console.log(6, action.payload);
      state.userSignUpData = action.payload;
    });
  },
});
export default authSlice;
