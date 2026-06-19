import { createSlice } from "@reduxjs/toolkit";

let userSlice = createSlice({
    name: "users",
    initialState: {
        users: [],    
    },
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        clearUsers: (state) => {
            state.users = [];
        }
    }
});

export let {setUsers, clearUsers} = userSlice.actions

export default userSlice.reducer;

