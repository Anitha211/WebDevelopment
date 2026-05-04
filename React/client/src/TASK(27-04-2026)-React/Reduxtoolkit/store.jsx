import { configureStore } from "@reduxjs/toolkit";

import countReducer from "./CountSlice"
import authReducer from "./AuthSlice";

export let store = configureStore({
    reducer: {
        count: countReducer,
         auth: authReducer
    }
})

export default store;  


