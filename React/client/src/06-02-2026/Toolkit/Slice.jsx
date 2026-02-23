import {createSlice} from "@reduxjs/toolkit"

let slice = createSlice({
    name:"counter",
    initialState:{
        value:0,
        action:""
    },
    reducers:{
        Increase : (state, action) => {
            console.log("Increase:",action.payload);
            state.value += 1;
            state.action = action.payload;
        },
        Decrease : (state,action) => {
            console.log("Decrease:",action.payload);
            state.value -= 1;
            state.action = action.payload;
        },
        Reset :(state,action) => {
            console.log("Reset:",action.payload);
            state.value = 0;
            state.action = action.payload;
        },
    }
})  

export let {Increase, Decrease, Reset} = slice.actions;
export default slice.reducer;




