import React, { useContext } from "react";
import { ThemeContext } from "./CreateContext";


function A() {

    let {theme} = useContext(ThemeContext);

    return(
        <div>
            <h1>Global State using Context API</h1>

            <h2>Theme : {theme === "light" ? "Dark Mode" : "Light Mode"}</h2>

        </div>
    )
}

export default A;