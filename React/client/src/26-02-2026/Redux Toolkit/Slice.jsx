import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name:"count",
    initialState:{value:10},
    reducers:{
       Increase: (state) => {
        state.value += 10;
       },
       Decrease: (state) => {
        state.value -= 5;
       }

    }
})

export let {Increase, Decrease} = slice.actions;
export default slice.reducer;