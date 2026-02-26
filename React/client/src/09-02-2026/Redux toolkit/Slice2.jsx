import { createSlice } from "@reduxjs/toolkit";

let slice =createSlice({
    name:"todo",
    initialState: {
        list : [],
        action:""
    },
    reducers: {
        Text1 : (state,action) => {
            console.log(action.payload);
           
            state.list = action.payload
            
        },
        Text2 : (state,action) => {
           console.log(action.payload);
     
           state.list = action.payload
           
           
        },
        

    }
})

export let {Text1, Text2} = slice.actions;
export default slice.reducer;