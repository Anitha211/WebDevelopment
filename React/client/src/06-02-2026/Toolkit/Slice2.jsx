import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
        authAction: "",
    },
    reducers: {
        Login (state,action){
            console.log(action.payload);
            state.isLogin = "LOgged In";
            state.authAction = action.payload;
        },
        Logout (state,action){
            console.log(action.payload);
            state.isLogin = "Logged Out";
            state.authAction = action.payload;
        },
    }
}) 

export let {Login, Logout } = slice.actions;
export default slice.reducer;