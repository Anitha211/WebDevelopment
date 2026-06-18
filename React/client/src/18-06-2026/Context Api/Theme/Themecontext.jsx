import React, { useState } from "react";
import ContextTheme from "./CreateContext";
import Theme from "./Theme";

function ThemeContext() {

    let [theme, setTheme] = useState("light");

    let changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return(

        <ContextTheme.Provider value={{theme, changeTheme}}>
            <Theme/>
        </ContextTheme.Provider>

    )
}

export default ThemeContext;
