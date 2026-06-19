import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./CounterSlice";
import usersSlice from "./UserSlice";

let store = configureStore({

    reducer: {

        count: counterSlice,
        users: usersSlice,

    }
})

export default store;

