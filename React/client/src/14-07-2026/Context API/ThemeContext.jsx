import React, {  useState } from "react";
import Theme from "./Theme";
import  A  from "./createContext";

function ThemeContext() {

    let [theme, setTheme] = useState("light");

    let ChangeTheme = () =>  {
        setTheme(theme === "light" ? "Dark" : "light")
    };

    return (
        <A.Provider value= {{theme, ChangeTheme}}>

        <Theme/>

        </A.Provider>
    )
}

export default ThemeContext;