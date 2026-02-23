import { configureStore } from "@reduxjs/toolkit";
import bulbReducer from "./Slice";
import numberReducer from "./Slice1";
import todoReducer from "./Slice2";

let store =configureStore({
    reducer: {
     bulb : bulbReducer,
     number : numberReducer,
     todo : todoReducer
    }
});

export default store;