import { createSlice } from "@reduxjs/toolkit";

let slice = createSlice({
    name:"bulb",
    initialState:{
        isOn: "OFF",
        action:"",
    },
    reducers:{
        turnOn : (state, action) => {
            console.log(action.payload);
            state.isOn = "ON";
            state.action = action.payload;
        },
        turnOff : (state,action) => {
            console.log(action.payload);
            state.isOn = "OFF";   
            state.action = action.payload;
        }
    }
})

export let {turnOn, turnOff} =slice.actions;
export default slice.reducer;







    

