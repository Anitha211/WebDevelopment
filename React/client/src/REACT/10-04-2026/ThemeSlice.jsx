import { createSlice } from "@reduxjs/toolkit";


let themeslice = createSlice({
    name: "theme",
    initialState: {
        darkMode: false
    },
    reducers: {
        ToggleTheme: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export let {ToggleTheme} = themeslice.actions;
export default themeslice.reducer;






