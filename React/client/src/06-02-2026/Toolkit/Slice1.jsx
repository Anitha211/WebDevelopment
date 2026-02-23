import { createSlice } from "@reduxjs/toolkit";

let slice =createSlice ({
    name:"user",
    initialState : {
        user:{
            name: "",
            email: "",
            city: "",
            state: "",
            country: ""
        },
        userAction:""
    },
    reducers:{ 
        updateUser : (state, action) => {
            
            console.log(action.payload);
            
            state.user.name = "Anitha";
            state.user.email = "aa12@gmail.com";
            state.user.city = "Kadapa";
            state.user.state = "Andhra Pradesh";
            state.user.country = "India";
            state.userAction = action.payload;
        },
        clearUser : (state,action) => {
            console.log(action.payload);
            
            state.user.name = "";
            state.user.email = "";
            state.user.city = "";
            state.user.state = "";
            state.user.country = "";
            state.userAction = action.payload;
        }
    }

})

export default slice.reducer;
export let {updateUser, updateAddress, clearUser} = slice.actions;
            



