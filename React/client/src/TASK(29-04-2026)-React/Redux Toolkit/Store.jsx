import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";

let store = configureStore({
    reducer:{
        cart: CartReducer,
    }
});
export default store;