import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducer/authSlice";
import cartReducer from "../reducer/dataSlice"

const store=configureStore({
    reducer:{
       allCart:cartReducer,
        auth:authSlice.reducer
    }
    
})
export default store;