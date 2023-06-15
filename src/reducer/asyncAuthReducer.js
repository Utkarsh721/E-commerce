import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthService } from "../Component/Services/apiAuthServices";

export const userSignupAction=createAsyncThunk("userSignupAction",async(credential)=>{
    console.log(2,credential);
    const response=await apiAuthService.signUp(credential);
    console.log(5,response);
    return response;

})