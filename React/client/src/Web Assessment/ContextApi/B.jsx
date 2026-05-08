import React, { useContext } from "react";
import Theme from "./Theme";
import { ThemeContext } from "./CreateContext";


function B() {

    let {setTheme,theme} = useContext(ThemeContext);

    return(

        <div>

            <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                {theme === "light" ? "Light" : "Dark"}
            </button>

        </div>
    )
}

export default B;