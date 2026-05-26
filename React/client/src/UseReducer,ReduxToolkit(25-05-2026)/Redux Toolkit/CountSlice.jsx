import { createSlice } from "@reduxjs/toolkit";

let CountSlice = createSlice({
    name: "count",
    initialState: { value: 0 },
    reducers: {

        increase: (state) => {
            state.value += 1
        },

        decrease: (state) => {
            state.value -= 1
        },

        reset: (state) => {
            state.value = 0
        }

    }
});

export let { increase, decrease, reset } = CountSlice.actions;
export default CountSlice.reducer;




