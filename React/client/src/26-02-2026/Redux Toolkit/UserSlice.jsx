import { createSlice } from "@reduxjs/toolkit";

let UserSlice =createSlice ({
    name:"user",
    initialState : {
        user:{
            name: "",
            email: "",
        },
       
    },
    reducers:{ 
        updateUser : (state, action) => {
            
            console.log(action.payload);
            
            state.user.name = "react";
            state.user.email = "react@gmail.com";
        },
        clearUser : (state,action) => {
            console.log(action.payload);
            state.user.name = "";
            state.user.email = "";
        }
    }

})

export default UserSlice.reducer;
export let {updateUser, updateAddress, clearUser} = UserSlice.actions;
            



