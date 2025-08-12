import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "./userSlice";
import designReducer from "./designSlice";
import shapesReducer from "./shapesSlice";

export const store = configureStore({
    reducer:{
        user: userReducer,
        designs: designReducer,
        shapes: shapesReducer,
    }
});