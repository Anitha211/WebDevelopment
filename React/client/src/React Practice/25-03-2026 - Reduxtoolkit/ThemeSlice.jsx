import { createSlice } from "@reduxjs/toolkit";

let ThemeSclice = createSlice({
    name:"theme",
    initialState: {theme:"light"},
    reducers: {

        Theme: (state) => {
             state.theme = state.theme == "light" ? "dark" : "light"
        }

    }
})

export let {Theme} = ThemeSclice.actions;

export default ThemeSclice.reducer;