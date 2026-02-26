import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./Slice";
import userReducer from "./UserSlice";
import todoReducer from "./TodoSlice"

let Store = configureStore({
       reducer:{
              count: countReducer,
              user: userReducer,
              todo: todoReducer,
       }
})

export default Store;