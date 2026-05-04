import React, { useContext } from "react";
import { Themecontext } from "./CreateContext"

function Theme() {

    let {theme, ChangeTheme} = useContext(Themecontext)

    return(

        <div>

            <h3 style={{ 
            background: theme === "light" ? "white" : "black",
            color : theme === "light" ? "black" : "white",
            padding: "20px"

            }}>{theme} Mode</h3>

            <button onClick={ChangeTheme}>
                Switch to {theme == "light" ? "Dark" : "Light"}</button>
        </div>
    )
}

export default Theme;