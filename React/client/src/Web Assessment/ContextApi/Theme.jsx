import React, { useState } from "react";
import { ThemeContext } from "./CreateContext";
import A from "./A"
import B from "./B"

function Theme() {

    let [theme, setTheme] = useState("light");

    
    return(

        <ThemeContext.Provider value = {{theme,setTheme}}>

            <A 
            theme={theme}
            />

            <B updateTheme={setTheme}
               theme={theme}
            />

        </ThemeContext.Provider>

    )
}

export default Theme;