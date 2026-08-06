import React, { useState } from "react";
import Theme from "./Theme";
import ThemeContext from "./CreateTheme";

function DisplayTheme() {

    let [theme, setTheme] = useState("light");

    let toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light")
    };

    return (

        <ThemeContext.Provider value={{theme, toggleTheme}}>

            <Theme/>

        </ThemeContext.Provider>

    )
}

export default DisplayTheme;


 