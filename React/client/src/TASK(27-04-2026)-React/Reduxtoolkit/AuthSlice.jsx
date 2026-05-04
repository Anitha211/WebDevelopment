import { createSlice } from "@reduxjs/toolkit";

let AuthSlice = createSlice({
    name: "auth",
    initialState: {
        isLogin: false,
        user: null
    },
    reducers: {
        login: (state,action) => {
         state.isLogin = true;
         state.user = action.payload;   
        },
        logout: (state) => {
            state.isLogin = false;
            state.user = null;
        }
    }
});

export let {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer;




    






