import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./CountSlice";
import ThemeReducer from "./ThemeSlice";
import AuthReducer from "./AuthSlice";
import ProductReducer from "./ProductSlice";
import CartReducer from "./CartSlice"

let store = configureStore({
    reducer:{

        count: countReducer,
        theme: ThemeReducer,
        auth: AuthReducer,
        products: ProductReducer,
        cart: CartReducer,
    }
});
export default store;