import React, { useState } from "react";
import { ThemeContext } from "./createContext";
import AA from "./AA";

function Theme(){

    let[theme, setTheme] = useState("light");

    let ChangeTheme = () =>  {
        setTheme(prev => (prev == "light" ? "dark" : "light"))
    }

    return(

       <ThemeContext.Provider value={{theme, ChangeTheme}}>

        <AA/>

       </ThemeContext.Provider>

    )
}

export default Theme;







