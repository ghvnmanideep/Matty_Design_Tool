import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import designReducer from "./designSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        designs: designReducer,
    }
});