import {configureStore} from "@reduxjs/toolkit";

import TodoReducer from "./TodoSlice";
import authReducer from "./AuthSlice";

let store = configureStore({
    
    reducer : {

        todo: TodoReducer,
        auth: authReducer,
        
    }
})

export default store;
