import React, {  useState } from "react";
import Theme from "./Theme";
import  Context1  from "./CreateContext";

function ThemeContext() {

    let [theme, setTheme] = useState("light");

    let ChangeTheme = () =>  {
        setTheme(theme === "light" ? "Dark" : "light")
    };

    return (
        <Context1.Provider value= {{theme, ChangeTheme}}>

        <Theme/>

        </Context1.Provider>
    )
}

export default ThemeContext;


