import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./CountSlice";
import AuthReducer from "./AuthSlice";
import TodoReducer from "./TodoSlice";
import CartReducer from "./CartSlice"

let store = configureStore ({

    reducer: {

        count: countReducer,
        auth: AuthReducer,
        todo: TodoReducer,
        cart: CartReducer

    }
})

export default store;