import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../reducer/authSlice";
import cartSlice from "../reducer/cartSlice"


const store = configureStore({
  reducer: { auth: authSlice.reducer,cart:cartSlice.reducer },
});
export default store;