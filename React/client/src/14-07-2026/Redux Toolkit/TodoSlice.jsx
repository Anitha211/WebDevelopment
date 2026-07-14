import { createSlice } from "@reduxjs/toolkit";

let TodoSlice = createSlice({
    name: "todo",

    initialState: {
        todos: []
    }, 
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },

        removeTodo: (state, action) => {
            state.todos.splice(action.payload, 1);
        }

    }
});

export let { addTodo, removeTodo} = TodoSlice.actions;

export default TodoSlice.reducer;