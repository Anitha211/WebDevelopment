import { createSlice } from "@reduxjs/toolkit";

let TodoSlice =createSlice({
    name:"todo",
    initialState: {
        list : [],
        nextId: 1,
    },
    reducers: {
        addTodo : (state,action) => {
            console.log(action.payload);
            state.list.push({
                id:state.nextId,
                text: action.payload
            })
        },

        deleteTodo : (state,action) => {
           console.log(action.payload);

           state.list = state.list.filter((todo)=> todo.id !== action.payload)
        },
    }
})

export let {addTodo, deleteTodo} = TodoSlice.actions;
export default TodoSlice.reducer;