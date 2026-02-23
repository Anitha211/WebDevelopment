import { createSlice } from "@reduxjs/toolkit";

let slice =createSlice({
       name:"number",
       initialState:{
        amount : 0,
        action : "",
       },
       reducers:{
        deposit : (state,action) => {
            console.log(action.payload);
            state.amount += 100;
            state.action = action.payload;
        },
        withdraw : (state,action) => {
            console.log(action.payload);
            state.amount -= 10;
            state.action = action.payload;
        }
         }
    })

export let {deposit, withdraw } = slice.actions;
export default slice.reducer;