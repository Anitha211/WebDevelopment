import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./ThemeSlice";
import authReducer from "./AuthSlice";
import cartReducer from "./cartSlice";

export let store = configureStore({
    reducer: {

        theme : themeReducer,
        auth: authReducer,
        cart: cartReducer
    }
})

export default store;
