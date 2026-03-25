import { createSlice } from "@reduxjs/toolkit";

let CountSlice = createSlice({
    name:"count",
    initialState:{value:0},
    reducers:{
       Increase: (state) => {
        state.value += 1;
       },
       Decrease: (state) => {
        state.value -= 1;
       }

    }
})

export let {Increase, Decrease} = CountSlice.actions;
export default CountSlice.reducer;