import React, {  useState } from "react";
import Theme from "./Theme";
import {Themecontext} from "./CreateContext"

function ThemeContext() {

    let [theme, setTheme] = useState("light");

    let ChangeTheme = () =>  {
        setTheme(theme === "light" ? "Dark" : "light")
    };

    return (
        <Themecontext.Provider value= {{theme, ChangeTheme}}>

        <Theme/>

        </Themecontext.Provider>
    )
}

export default ThemeContext;

