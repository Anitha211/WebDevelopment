import {createSlice} from "@reduxjs/toolkit"

let slice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        Increase : (state, action) => {
            console.log("Increase:",action.payload);
            state.value += 1;
            
        },
        Decrease : (state,action) => {
            console.log("Decrease:",action.payload);
            state.value -= 1;
            
        },
        Reset :(state,action) => {
            console.log("Reset:",action.payload);
            state.value = 0;
            
        },
    }
})  

export let {Increase, Decrease, Reset} = slice.actions;
export default slice.reducer;


